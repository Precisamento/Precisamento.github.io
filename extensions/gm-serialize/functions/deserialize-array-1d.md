---
title: deserialize_array_1d
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/deserialize-array-1d/
layout: extension-function
---

_Deserializes a 1-dimensional array variable. Should not be called directly._

### Syntax
```cs
deserialize_array_1d(value)
```

| Argument | Type | Description |
| --- | --- | --- |
| value | real | The value to be deserialized into a 1d array. |

**Returns:** N/A

### Description
This function will deserialize a value into a 1-dimensional array. This is used to explicitly deserialize a variable and should not be called directly. Note that arrays will be serialized automatically, but need to be explicitly deserialized.