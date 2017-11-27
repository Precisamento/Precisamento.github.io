---
title: serialize_list
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/serialize-list/
layout: extension-function
---

_Serializes a ds_list variable. Should not be called directly._

### Syntax
```cs
serialize_list(map, key, value)
```

| Argument | Type | Description |
| --- | --- | --- |
| map | real | The ds_map to serialize the value to. |
| key | string | The name of the variable to map the list to. |
| value | real | The ds_list to be serialized. |

**Returns:** N/A

### Description
This function will serialize a ds_list variable. This is used to explicitly serialize a variable and should not be called directly.