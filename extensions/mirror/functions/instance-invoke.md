---
title: instance_invoke
extension: mirror
category: functions
permalink: /extensions/mirror/functions/instance-invoke/
layout: extension-function
---

_Invokes a method on an instance._

### Syntax ###
```cs
instance_invoke(id, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| id | double | The id of the instance that will call the method. |
| method_name | string | The name of the method to call. |
| argument_count | double | The number of arguments loaded to be passed to the method. |

**Returns:** 1

### Description

This function invokes a method on an instance. First, load the method arguments, then call this function. 

