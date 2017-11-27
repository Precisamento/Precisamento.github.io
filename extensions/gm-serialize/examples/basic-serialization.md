---
title: Basic Serialization
extension: gm-serialize
layout: extension-example
category: examples
---

Using this library, there are two built in ways to serialize an instance, both using the function {% include category.html name="instance_serialize" cat="functions" %}. In this example, we're going to go through the first and easier way to do so.

For this example, we're going to create to create a simple object: `obj_door`. All this object needs is this code in it's create event:

```cs
opened = false;
```

This is just an example, though it does have a real world use. Specifically, while `opened == false` the player would be able to collide with it, otherwise they can walk through it. I'll leave the implementation of that to you.

With that object definition out of the way, let's discuss how to use it with this library. The steps to do so are extremely easy:
* Create an instance of the object `obj_door`.
* Decide on a file name. 
* Call {% include category.html name="instance_serialize" cat="functions" %} on the instance.

And that's it! Let's see what this looks like in code:

```cs
var door = instance_create(64, 128, obj_door);
var file_name = "door.json";
instance_serialize(door, file_name);
```

Simple enough. However, just being able to save objects isn't very useful. Now we need a way to load them back into the game. This time we'll use the function {% include category.html name="instance_deserialize" cat="functions" %}. All you need to call that function is the name of the file you've used previously to serialize an instance. In code:

```cs
var file_name = "door.json";
var door = instance_deserialize(file_name);
```

And now the variable `door` will essentially be the same door that was previously serialized!

For an example on how to serialize more complex objects, [see here]({{site.baseurl}}/extensions/{{page.extension}}/{{page.category}}/complex-serialization/).