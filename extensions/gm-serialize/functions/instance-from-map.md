---
title: instance_from_map
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/instance-from-map/
layout: extension-function
---

_Converts a ds_map into an instance._

### Syntax
```cs
instance_from_map(map, explicit=noone)
```

| Argument | Type | Description |
| --- | --- | --- |
| instance | real | The ds_map to convert into an instance. |
| explicit | real (optional) | A ds_map that maps variable names to functions that will properly deserialize the values. |

**Returns:** Real (instance id)

### Description
This function will take a ds_map and convert it into an instance.