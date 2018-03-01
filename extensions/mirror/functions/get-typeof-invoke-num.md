---
title: get_typeof_invoke_num
extension: mirror
category: functions
permalink: /extensions/mirror/functions/get-typeof-invoke-num/
layout: extension-function
---

_Invokes a method on the first argument, and returns the result as a number._

### Syntax ###
```cs
get_typeof_invoke_num(method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** Real

### Description

This function invokes a method on the first argument and returns the result as a number. First, load the target, then load the method arguments, then call this function. 

