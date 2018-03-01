---
title: load_enum_typeof
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-enum-typeof/
layout: extension-function
---

_Loads an enum of the type specified by the first argument, as an argument._

### Syntax ###
```cs
load_enum_typeof(value_name)
```

| Argument | Type | Description |
| --- | --- | --- |
| value_name | string | The name of the enum value. |

**Returns:** 1

### Description

Loads an enum of the type specified by the first argument, as an argument. First load the enum type, then call this function. If the enum can have multiple [values](https://docs.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=netframework-4.7), separate each name by a comma. 

