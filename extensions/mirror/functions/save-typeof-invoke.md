---
title: save_typeof_invoke
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-typeof-invoke/
layout: extension-function
---

_Invokes a method on the first argument, saves the result and returns its id._

### Syntax ###
```cs
save_typeof_invoke(method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** Instance Id

### Description

This function invokes a method on the first argument, saves the result and returns its id. First, load the target, then load the method arguments, then call this function. 

