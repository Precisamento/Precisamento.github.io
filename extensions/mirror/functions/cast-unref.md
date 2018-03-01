---
title: cast_unref
extension: mirror
category: functions
permalink: /extensions/mirror/functions/cast-unref/
layout: extension-function
---

_Converts an instances type to its basic form if possible._

### Syntax ###
```cs
cast_unref(id)
```

| Argument | Type | Description |
| --- | --- | --- |
| id | double | The id of the instance to have it's type reverted. |

**Returns:** 

### Description

This function converts an instances type to its basic form if possible. If an instance has had it's type {% include ref.html name="cast_to_ref" display="converted to it's ByRef form" cat="functions" %}, use this function to revert it back to normal if needed. 

