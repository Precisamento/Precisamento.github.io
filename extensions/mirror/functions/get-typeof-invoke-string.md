---
title: get_typeof_invoke_string
extension: mirror
category: functions
permalink: /extensions/mirror/functions/get-typeof-invoke-string/
layout: extension-function
---

_Invokes a method on the first argument, and returns the result as a string._

### Syntax ###
```cs
get_typeof_invoke_string(method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** String

### Description

This function invokes a method on the first argument and returns the result as a string. First, load the target, then load the method arguments, then call this function. 

