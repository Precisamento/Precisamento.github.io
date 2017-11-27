---
title: serialize_ignore
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/serialize-ignore/
layout: extension-function
---

_Ignores a variable while serializing an instance. Should not be called directly._

### Syntax
```cs
serialize_ignore(map, key, value)
```

| Argument | Type | Description |
| --- | --- | --- |
| map | real | The ds_map to serialize the value to. |
| key | string | The name of the variable ignore. |
| value | real | The variable that is ignored. |

**Returns:** N/A

### Description
This function will ignore a variable while serializing. Any variable that is ignored while serializing will have their default value when deserializing (or not exist at all if it's not set in the objects create event).