---
title: load_new_typeof
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-new-typeof/
layout: extension-function
---

_Creates a new instance of the type stored in the first argument, then loads it as an argument._

### Syntax ###
```cs
load_new_typeof(argument_count)
```

| Argument | Type | Description |
| --- | --- | --- |
| argument_count | double | The number of loaded arguments used to construct the instance. |

**Returns:** 1

### Description

This function will create a new object of the type specified by the first argument and loads it as an argument. First, load the type to create, then load the arguments that will be passed to the constructor, then call this function. It will grab the arguments and use their types to determine which contructor to call. 

