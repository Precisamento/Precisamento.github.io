---
title: deserialize_nested_instance
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/deserialize-nested-instance/
layout: extension-function
---

_Deserializes a nested instance variable. Should not be called directly._

### Syntax
```cs
deserialize_nested_instance(value)
```

| Argument | Type | Description |
| --- | --- | --- |
| value | real | The value to be deserialized into a nested instance. |

**Returns:** N/A

### Description
This function will deserialize a value into a nested instance. This is used to explicitly deserialize a variable and should not be called directly. This function will call {% include category.html name="instance_from_map" %} on the value passed to it and return the resulting instance to the parent instance. This means that you can't pass any functions to specify how certain variable should be deserialized. If you would like to do so, you'll have to create a special explicit function for that variable and pass that in when deserializing the file.