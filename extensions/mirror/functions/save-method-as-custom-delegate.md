---
title: save_method_as_custom_delegate
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-method-as-custom-delegate/
layout: extension-function
---

_Saves a method as the specified delegate and returns its id._

### Syntax ###
```cs
save_method_as_custom_delegate(type_name, method_name, delegate_type, caller_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to save. |
| delegate_type | string | The name of the delegate to create. |
| caller_id | double | If this method is not static, this will be the id of the object that calls the function. Otherwise, it must be less than 0 (i.e. noone). |

**Returns:** Instance Id.

### Description

This function saves a method as the specified delegate and returns its id. First, load the type of each argument, then call this method. 

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.methodinfo.createdelegate?view=netframework-4.7#System_Reflection_MethodInfo_CreateDelegate_System_Type_System_Object_)

