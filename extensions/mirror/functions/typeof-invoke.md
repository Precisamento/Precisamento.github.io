---
title: typeof_invoke
extension: mirror
category: functions
permalink: /extensions/mirror/functions/typeof-invoke/
layout: extension-function
---

_Invokes a method on the first argument._

### Syntax ###
```cs
typeof_invoke(method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** 1

### Description

This function invokes a method on the first argument. First, load the target, then load the method arguments, then call this function.

