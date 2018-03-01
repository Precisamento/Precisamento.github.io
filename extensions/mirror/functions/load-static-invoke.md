---
title: load_static_invoke
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-static-invoke/
layout: extension-function
---

_Invokes a static method, and loads the result._

### Syntax ###
```cs
load_static_invoke(type_name, method_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the method. |
| method_name | string | The name of the method to be called. |
| argument_count | double | The number of arguments loaded to be passes to the method. |

**Returns:** Real

### Description

This function invokes a static method, and loads the result. First load the method arguments, then call this function. 

