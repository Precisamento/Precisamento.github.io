---
title: instance_to_map
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/instance-to-map/
layout: extension-function
---

_Converts an instance into a ds_map._

### Syntax
```cs
instance_to_map(instance, explicit=noone)
```

| Argument | Type | Description |
| --- | --- | --- |
| instance | real | The id of the instance to convert. |
| explicit | real (optional) | A ds_map that maps variable names to functions that will serialize them. |

**Returns:** Real (map id).

## Description
This function will take an instance and convert it into a ds_map. Not all of the built-in variables will be included in this map. The ones that are included are:
* x
* y
* depth
* image_alpha
* image_angle
* image_blend
* image_index
* image_speed
* image_xscale
* image_yscale
* mask_index
* persistent
* sprite_index

If you would like to include any that aren't listed, it is easy to add. Just look in the source file for more info.