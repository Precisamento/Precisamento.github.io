---
title: load_method_as_custom_delegate
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-method-as-custom-delegate/
layout: extension-function
---

_Loads a method as the specified delegate._

### Syntax ###
```cs
load_method_as_custom_delegate(type_name, method_name, delegate_type, caller_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to save. |
| delegate_type | string | The name of the delegate to create. |
| caller_id | double | If this method is not static, this will be the id of the object that calls the function. Otherwise, it must be less than 0 (i.e. noone). |

**Returns:** 1

### Description

This function loads a method as the specified delegate as an argument. First, load the type of each argument, then call this method. 

