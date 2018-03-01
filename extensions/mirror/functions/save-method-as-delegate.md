---
title: save_method_as_delegate
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-method-as-delegate/
layout: extension-function
---

_Saves a method as the appropriate delegate and returns its id._

### Syntax ###
```cs
save_method_as_delegate(type_name, method_name, argument_types, caller_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to save. |
| argument_types | double | The number of types loaded used to find the correct method overload. |
| caller_id | double | If this method is not static, this will be the id of the object that calls the function. Otherwise, it must be less than 0 (i.e. noone). |

**Returns:** Instance Id.

### Description

This function saves a method as the appropriate delegate and returns its id. First, load the type of each argument, then call this method. If the function has a return value, it's saved as a Func. Otherwise, it will be saved as an Action. 

