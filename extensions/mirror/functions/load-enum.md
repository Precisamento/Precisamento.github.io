---
title: load_enum
extension: mirror
category: functions
permalink: /extensions/mirror/functions/load-enum/
layout: extension-function
---

_Loads an enum value as an argument._

### Syntax ###
```cs
load_enum(enum_name, value_name)
```

| Argument | Type | Description |
| --- | --- | --- |
| enum_name | string | The name of the enum type. |
| value_name | string | The name of the enum value. |

**Returns:** 1

### Description

This function loads an enum value as an argument. If the enum can have multiple [values](https://docs.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=netframework-4.7), separate each name by a comma. 

