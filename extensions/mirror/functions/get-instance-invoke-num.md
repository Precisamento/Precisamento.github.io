---
title: get_instance_invoke_num
extension: mirror
category: functions
permalink: /extensions/mirror/functions/get-instance-invoke-num/
layout: extension-function
---

_Invokes a method on an instance, and returns the result as a number._

### Syntax ###
```cs
get_instance_invoke_num(id, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| id | double | The id of the instance that will call the method. |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** Real

### Description

This function invokes a method on an instance, and returns the result as a number. First, load the method arguments, then call this function. 

