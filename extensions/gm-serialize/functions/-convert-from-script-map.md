---
title: _convert_from_script_map
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/-convert-from-script-map/
layout: extension-function
---

_Converts a ds_map into a _serialize or _deserialize variable. Should not be called directly._

### Syntax
```cs
_convert_from_script_map(value)
```

| Argument | Type | Description |
| --- | --- | --- |
| value | real | The ds_map to convert. |

**Returns:** Real (Map id)

### Description
This function uses a ds_map that maps variable names to script names to create a ds_map that maps variable names to script indeces. This is used to make sure that adding/removing scripts doesn't break serialization. It should not be called directly.