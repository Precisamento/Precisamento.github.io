---
title: load_new
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-new/
layout: extension-function
---

_Creates a new instance, then loads it as an argument._

### Syntax ###
```cs
load_new(type_name, argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type to create. |
| argument_count | double | The number of loaded arguments used to construct the instance. |

**Returns:** 1

### Description

This function will create a new object of the specified type and loads it as an argument. First, load the arguments that will be passed to the constructor, then call this function. It will grab the arguments and use their types to determine which contructor to call. 

