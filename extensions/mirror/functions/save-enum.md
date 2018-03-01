---
title: save_enum
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-enum/
layout: extension-function
---

_Saves an enum value and returns its id._

### Syntax ###
```cs
save_enum(enum_name, value_name)
```

| Argument | Type | Description |
| --- | --- | --- |
| enum_name | string | The name of the enum type. |
| value_name | string | The name of the enum value. |

**Returns:** Instance Id

### Description

This function saves an enum value and returns its id. If the enum can have multiple [values](https://docs.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=netframework-4.7), separate each name by a comma. 

