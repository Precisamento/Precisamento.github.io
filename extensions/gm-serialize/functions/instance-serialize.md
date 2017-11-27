---
title: instance_serialize
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/instance-serialize/
layout: extension-function
---

_Serializes an instance to a file._

### Syntax
```cs
instance_serialize(instance, file_name, explicit_serialize_map=noone)
```

| Argument | Type | Description |
| --- | --- | --- |
| instance | real | The id of the instance to be serialized. |
| file_name | string | The name of the file to save the instance to. |
| explicit_serialize_map | real (optional) | A ds_map that maps variable names to functions that will serialize the variable. |

**Returns:** N/A

### Description
This function will serialize an instance to JSON and write that to a file in plain text. If you wish to save it more securely, you'll have to write your own function to do so. However this won't be that hard. Just call {% include category.html name="instance_to_map" %} on the instance, and serialize and save that map however you'd like. Just remember to write a complimentary function to deserialize it.