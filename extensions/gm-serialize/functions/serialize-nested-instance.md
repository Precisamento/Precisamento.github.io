---
title: serialize_nested_instance
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/serialize-nested-instance/
layout: extension-function
---

_Serializes a nested instance variable. Should not be called directly._

### Syntax
```cs
serialize_nested_instance(map, key, value)
```

| Argument | Type | Description |
| --- | --- | --- |
| map | real | The ds_map to serialize the value to. |
| key | string | The name of the variable that the instance is to be mapped to. |
| value | real | The id of the instance to be serialized. |

**Returns:** N/A

### Description
This function will serialize a nested instance variable. This is used to explicitly serialize a variable and should not be called directly. This function will call {% include category.html name="instance_to_map" %} on the instance and add the resulting map to the final map. This means that you can't pass any functions to specify how certain variable should be serialized. If you would like to do so, you'll have to create a special explicit function for that variable and pass that in when serializing the parent instance.