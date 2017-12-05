---
title: _convert_to_script_map
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/-convert-to-script-map/
layout: extension-function
---

_Converts a _serialize or _deserialize variable into a serializable ds_map. Should not be called directly._

### Syntax
```cs
_convert_to_script_map(value)
```

| Argument | Type | Description |
| --- | --- | --- |
| value | real | The variable to convert. |

**Returns:** Real (Map id)

### Description
This function uses a ds_map that maps variable names to script indeces to create a ds_map that maps variable names to script names. This is used to make sure that adding/removing scripts doesn't break serialization. It should not be called directly.