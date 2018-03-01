---
title: save_method
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-method/
layout: extension-function
---

_Saves a method and returns its id._

### Syntax ###
```cs
save_method(type_name, method_name, argument_types, is_instance)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to save. |
| argument_types | double | The number of types loaded used to find the correct method overload. |
| is_instance | double | Defines whether to find a static or instance method. |

**Returns:** Instance Id.

### Description

This function saves a method and returns its id. First, load the type of each argument, then call this method. 

