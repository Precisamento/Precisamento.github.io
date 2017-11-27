---
title: serialize_map
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/serialize-map/
layout: extension-function
---

_Serializes a ds_map variable. Should not be called directly._

### Syntax
```cs
serialize_map(map, key, value)
```

| Argument | Type | Description |
| --- | --- | --- |
| map | real | The ds_map to serialize the value to. |
| key | string | The name of the variable that the ds_map is to be mapped to. |
| value | real | The ds_map to be serialized. |

**Returns:** N/A

### Description
This function will serialize a ds_map variable. This is used to explicitly serialize a variable and should not be called directly.