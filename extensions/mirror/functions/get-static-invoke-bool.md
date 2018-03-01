---
title: get_static_invoke_bool
extension: mirror
category: functions
permalink: /extensions/mirror/functions/get-static-invoke-bool/
layout: extension-function
---

_Invokes a static method, and returns the result as a bool._

### Syntax ###
```cs
get_static_invoke_bool(type_name, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to be called. |
| argument_count | double | The number of arguments loaded to be passes to the method. |

**Returns:** Bool

### Description

This function invokes a static method, and returns the result as a bool. First load the method arguments, then call this function. 

