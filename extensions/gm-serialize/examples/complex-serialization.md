---
title: Complex Serialization
extension: gm-serialize
layout: extension-example
category: examples
---

There are two ways to serialize complex objects with this library: an implicit way and an explicit way. In this tutorial, we're going to look at both methods, as well as how to extend these methods to fit your own needs.

For this example, we're going to need a rather complex object. For this example, we're going to have a chest object `obj_chest`. This chest is going to keep track of its items and whether or not it's been opened. In code:

```cs
///Chest Create

items = ds_list_create();
ds_list_add(items, "Potion", "Rusty Sword", "Rookies Helm");
opened = false;
```

Now when we try and serialize that, we're going to have some issues. A ds_list looks like a normal number, and there's no way to tell which is which. The extension will always default to numbers, and so we need a way to tell the extension that the variable is a list. To solve this, we're going to add another variable to the chest object: `_serialize`. This is a special variable that the serialize method specifically looks for. This variable is going to be a special ds_map that will map variable names to scripts that are used to serialize the variables. It sounds complicated, but in practice it is very simple.

There are a number of built-in scripts that are meant to be used with this map. Let's go ahead and see what we can do using only those (in this instance, everything). Because we're serializing a list, we can use the {% include category.html name="serialize_list" cat="functions" %} script. Let's see what the chest object looks like now:

```cs
///Chest Create

items = ds_list_create();
ds_list_add(items, "Potion", "Rusty Sword", "Rookies Helm");
opened = false;

_serialize = ds_map_create();
ds_map_add("items", serialize_list);
```

Now, when a chest is being serialized, it will see that the `items` variable is in the `_serialize` map, and it will call the script `serialize_list` on it.

There are a couple of important things to note. First, make sure to add the variables to the map as a string. Second, you must add the id of the script to the map. Make sure you don't call it, otherwise the game will crash (made that mistake a few times myself). Third, make sure your instances don't use the variable `_serialize` for any other purpose than this, otherwise it might serialize incorrectly or just crash.

While this is nice, if you try and deserialize it now, you'll notice that the list still isn't being recreated. That's because lists (and most other special variables) need a complimentary deserialize script. We store these in a variable called `_deserialize` that works exactly the same way. We're going to map a variable name to a script that deserializes it. In this case we can use {% include category.html name="deserialize_list" %}.

```js
///Chest Create

items = ds_list_create();
ds_list_add(items, "Potion", "Rusty Sword", "Rookies Helm");
opened = false;

_serialize = ds_map_create();
ds_map_add("items", serialize_list);

_deserialize = ds_map_create();
ds_map_add("items", deserialize_list);
```

Now we can successfully serialize and deserialize our chest object! To do so:

```cs
//Create a chest to be serialized
var chest = instance_create(32, 32, obj_chest);

//Serialize the chest to the file "chest.json"
instance_serialize(chest, "chest.json");

//Destroy the chest to make sure everything works.
instance_destroy(chest);

//Restore the chest. It will be exactly the same as the one created earlier.
chest = instance_deserialize("chest.json");
```

So when would you not want to use this method? Well for the most part you should want to use this. However, this does mean that each instance has to manage at least one ds_map, usually two, which isn't always optimal or practical. So what can you do in the other cases? Well you can specify the special serialization maps directly to the scripts! All of the scripts regarding the serialization process have an optional argument that takes a map and uses that to determine how variables are serialized. You can mix and match both methods, however the map provided to the script will take precedence if both maps contain the same variable. Let's see what this will look like using our chest object:

```cs
///Chest Create Event
//======================================================

items = ds_list_create();
ds_list_add(items, "Potion", "Rusty Sword", "Rookies Helm");
opened = false;


///Serializing the chest
//======================================================

//Create the chest to be serialized.
var chest = instance_create(32, 32, obj_chest);

//Create the map that defines how variables will be serialized.
var serialize = ds_map_create();

//Define how the "items" variable will be serialized.
ds_map_add("items", serialize_list);

//Serialize the chest, using the serialize map.
instance_serialize(chest, "chest.json", serialize);


///Deserializing the chest
//======================================================

//Create the map that defines how variables will be deserialized.
var deserialize = ds_map_create();

//Define how the "items" variable will be deserialized.
ds_map_add("items", deserialize_list);

//Deserialize the previously saved chest, using the deserialize map.
var chest = instance_deserialize("chest.json", deserialize);
```

That's all well and good, exciting even. But what about in the cases where you need a special script, but there is no built-in solution. For example, what if the items in the chest are actual instances, rather than strings? Well in that case we'll have to write our own scripts, one to serialize and one to deserialize.

Let's start with the serialize script. All serialize scripts will have three arguments passed to them: the final map, the name of their variable, and the value of the variable. When writing your own serialize method, it's expected that _you'll add the final value into the map yourself_. What we're going to do here is convert each object into a ds_map using {% include category.html name="instance_to_map" cat="functions" %}, add each of those into a list, then add that list into the final map.

```cs
///serialize_instance_list(map, key, value)

var map = argument[0];
var key = argument[1];
var values = argument[2]; //list of instances

//This is the list that will store all of the converted instances.
var list = ds_list_create();

//Loop through all instances, convert them to map, add to list.
var count = ds_list_size(values);
for(var i = 0; i < count; i++) {
    var instance_map = instance_to_map(values[| i]);
    ds_list_add(list, instance_map);

    //Make sure GM recognizes that the index is a map.
    ds_list_mark_as_map(list, i);
}

ds_map_add_list(map, key, list);

//Note how we don't clean up any of the variables. 
//When the parent map is destroyed it will automatically cleanup all of the nested lists and maps. 
//If you destroy any of the nested data structures, it will result in undefined behaviour.
```

Deserialize scripts only have two arguments passed to them: the value mapped to a variable name, and the value assigned to variable when the instance is created. When these scripts are done, they need to return the deserialized value. In this case (and in most cases), we're going to follow the opposite steps of the serialize script to reconstruct the instances in the items list. We're going to loop through the list and call {% include category.html name="instance_from_map" cat="functions" %} on each of the stored maps. **IMPORTANT**: We need to make sure to destroy all of the instances in the original list, then destroy the list _if it **exists**_. Otherwise there will be a memory leak.

```cs
///deserialize_instance_list(value, original)

var values = argument[0];
var original = argument[1];

//Make sure that any data instantiated in the chest's create event
//is destroyed.
if(ds_exists(original, ds_type_list)) {
    var size = ds_list_size(original);
    for(var i = 0; i < size; i++) {
        if(instance_exists(original[| i])) {
            instance_destroy(original[| i]);
        }
    }
    ds_list_destroy(original);
}

//This will be the result of this script.
var list = ds_list_create();

//Loop through all indices of the values list.
var count = ds_list_size(values);
for(var i = 0; i < count; i++) {
    //Reconstruct the instance.
    var inst = instance_from_map(values[| i]);

    //Add the instance to the result list.
    ds_list_add(list, inst);
}

//return the result.
return list;
```

Now that we've created these scripts, lets see how they might be used:

```cs
///Chest Create Event

items = ds_list_create();
ds_list_add(items, instance_create(0, 0, obj_potion));
ds_list_add(items, instance_create(0, 0, obj_rusty_sword));
ds_list_add(items, instance_create(0, 0, obj_rookie_helm));
opened = false;

_serialize = ds_map_create();
_serialize[? "items"] = serialize_instance_list;

_deserialize = ds_map_create();
_deserialize[? "items"] = deserialize_instance_list;
```

One of the great things about scripts like this is that they're extremely reusable. Anytime that you need to serialize a list of instances, the script can now be used.

This script actually illustrates why the implicit maps are preferred: how are you supposed to pass an explicit map to the instances in the list? If you think that an instance is going to be referred to by another instance or reside in any lists, it is important that they define the `_serialize` and `_deserialize` variables themselves.