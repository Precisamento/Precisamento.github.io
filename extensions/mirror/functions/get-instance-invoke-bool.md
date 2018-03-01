---
title: get_instance_invoke_bool
extension: mirror
category: functions
permalink: /extensions/mirror/functions/get-instance-invoke-bool/
layout: extension-function
---

_Invokes a method on an instance, and returns the result as a bool._

### Syntax ###
```cs
get_instance_invoke_bool(id, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| id | double | The id of the instance that will call the method. |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** Bool

### Description

This function invokes a method on an instance, and returns the result as a bool. First, load the method arguments, then call this function. 

