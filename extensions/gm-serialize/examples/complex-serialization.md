---
title: Complex Serialization
extension: gm-serialize
layout: extension-example
category: examples
---

Using this library, there are two built in ways to serialize an instance, both using the function {% include category.html name="instance_serialize" cat="functions" %}. In this example, we're going to go through the second and more difficult way.

For this example, we're going to need a rather complex object. For this example, we're going to have a chest object `obj_chest`. This chest is going ot keep track of it's items and whether or not it's been opened. In code:

```cs
///Chest Create

items = ds_list_create();
ds_list_add(items, "Potion", "Rusty Sword", "Rookies Helm");
opened = false;

```

Now ehen we try and serialize that, we're going to have some issues. A ds_list looks like a normal number, and there's no way to tell which is which. The extension will always default to numbers, and so we need a way to tell the extension that the variable is a list. To solve this, the method {% include category.html name="instance_serialize" cat="functions" %} has an optional argument that accepts a ds_map telling it what to do with specific variables. This will be referred to as the explicit map, as you're explicitly specifying what to do with the variables.

There are a number of built-in scripts to use with this map. Let's go ahead and see what we can do using only those. (In this instance, everything). Because we're serializing a list, we can use the {% include category.html name="serialize_list" cat="functions" %} and {% include category.html name="deserialize_list" cat="functions" %} functions. So let's look at the code:

```cs
//Create a chest at any position.
var chest = instance_create(74, 89, obj_chest);

//Create the explicit map.
var map = ds_map_create();

//Tell the map what to do with the "items" variable.
ds_map_add(map, "items", serialize_list);

///Serialize the chest using the explicit map.
instance_serialize(chest, "chest.json", map);

//Don't forget to clean up.
ds_map_destroy(map);

//And the chest will be serialized correctly.
```

There are a couple of things to note here. First, make sure to add variables to the explicit maps as a string. Second, you add the id of the script as the value. Make sure you don't call the script, otherwise the game will crash (made that mistake a few times myself).

Now that it's been saved, we'll need to load it back in eventually.

```cs
///Create the explicit map.
var map = ds_map_create();

//Tell the map what to do with the "items" variable.
//Since we're deserializing this time, use deserialize_list.
ds_map_add(map, "items", deserialize_list);

//Deserialize the file.
var chest = instance_deserialize("chest.json", map);

//Don't forget to clean up.
ds_map_destroy(map);

//And now we have a functioning chest.
```

That's all well and good, exciting even. But what about in cases where you need a special function, but there is no built-in solution. For example, what if the items in the chest are actual instances, rather than strings? Well in that case we'll have to write our own functions, one to serialize and one to deserialize.

Let's start with the serialize function. All serialize functions will have three arguments passed to them: the final map, the name of their variable, and the value of the variable. When writing your own serialize method, it's expected that _you'll add the final value into the map yourself_. What we're going to do here is convert each object into a ds_map using {% include category.html name="instance_to_map" cat="functions" %}, add each of those into a list, then add that list into the final map.

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

Deserialize functions only have one argument passed to them: the value mapped to a variable name. When these functions are done, they need to return the deserialized value. In this case (and in most cases), we're going to follow the opposite steps of the serialize function to reconstruct the instances in the items list. We're going to loop through the list and call {% include category.html name="instance_from_map" cat="functions" %} on each of the stored maps.

```cs
///deserialize_instance_list(value)

var values = argument[0];

//This will be the result of this function.
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

Now that we've created these functions, they are easy enough to use. Using the chest example:

```cs
///Chest Create Event
//======================================================
items = ds_list_create();
ds_list_add(items, instance_create(0, 0, obj_potion));
ds_list_add(items, instance_create(0, 0, obj_rusty_sword));
ds_list_add(items, instance_create(0, 0, obj_rookie_helm));
opened = false;


///Serialize
//======================================================
var chest = instance_create(74, 89, obj_chest);

//Create the explicit map.
var map = ds_map_create();

//Tell the map what to do with the "items" variable.
//This time we'll use the function we've created.
ds_map_add(map, "items", serialize_instance_list);

///Serialize the chest using the explicit map.
instance_serialize(chest, "chest.json", map);

///Deserialize
//======================================================
///Create the explicit map.
var map = ds_map_create();

//Tell the map how to deserialize the "items" variable.
//This time we'll use the function we've created.
ds_map_add(map, "items", deserialize_instance_list);

//Deserialize the file.
var chest = instance_deserialize("chest.json", map);

//And now we have a functioning chest.
```

One of the great things about functions like this is that they're very reusable. Any time you have a list of instances you can use this function to save and load them. There is one relatively significant downside however. When serializing the instances in the list, you can't tell them how to serialize any of their variables. If you need to do something like that, there is still one more option for you. If the instance has a ds_map variable `_explicit`, it will use that in addition to map passed into the serialize functions. Important to note: that variable **will not be serialized**. Thus if it is not constructed when the instance is created, you'll have to figure out another way to make sure it is.