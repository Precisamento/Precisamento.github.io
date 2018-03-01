---
title: save_static_invoke
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-static-invoke/
layout: extension-function
---

_Invokes a static method, saves the result and returns its id._

### Syntax ###
```cs
save_static_invoke(type_name, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to be called. |
| argument_count | double | The number of arguments loaded to be passes to the method. |

**Returns:** Instance Id

### Description

This function invokes a static method, saves the result and returns its id. First load the method arguments, then call this function. 

