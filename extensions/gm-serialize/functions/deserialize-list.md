---
title: deserialize_list
extension: gm-serialize
category: functions
permalink: /extensions/gm-serialize/functions/deserialize-list/
layout: extension-function
---

_Deserializes a ds_list variable. Should not be called directly._

### Syntax
```cs
deserialize_list(value)
```

| Argument | Type | Description |
| --- | --- | --- |
| value | real | The value to be deserialized into a ds_list. |
| original | real | The variable as was created in the instances create event. |

**Returns:** N/A

### Description
This function will deserialize a value into a ds_list. This is used to explicitly deserialize a variable and should not be called directly.