---
title: instance_deserialize
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/instance-deserialize/
layout: extension-function
---

_Deserializes an instance from a file_

### Syntax
```cs
instance_deserialize(file_name, explicit_deserialize_map=noone)
```

| Argument | Type | Description |
| --- | --- | --- |
| file_name | string | The name of a file containing a previously serialized instance. |
| explicit_deserialize_map | real (optional) | A ds_map that maps variable names to functions that will deserialize values from the file. |

**Returns:** Real (instance id)

### Description
This function will take file that contains a JSON data structure, convert it into a ds_map, then convert that map into an instance. This function will only work with instances serialized with {% include category.html name="instance_serialize" %}. If you've created a custom serialize function, you must also create a custom deserialize function to match it.