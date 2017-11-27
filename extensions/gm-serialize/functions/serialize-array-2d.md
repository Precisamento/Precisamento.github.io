---
title: serialize_array_2d
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/serialize-array-2d/
layout: extension-function
---

_Serializes a 2-dimensional array variable. Should not be called directly._

### Syntax
```cs
serialize_list(map, key, value)
```

| Argument | Type | Description |
| --- | --- | --- |
| map | real | The ds_map to serialize the value to. |
| key | string | The name of the variable to map the 2d array to. |
| value | real | The 2d array to be serialized. |

**Returns:** N/A

### Description
This function will serialize a 2-dimensional array variable. This is used to explicitly serialize a variable and should not be called directly. Unlike a 1d array, these need to be specified explicitly while serializing. They both still have to be specified when deserializing.