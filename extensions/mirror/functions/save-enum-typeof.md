---
title: save_enum_typeof
extension: mirror
category: functions
permalink: /extensions/mirror/functions/save-enum-typeof/
layout: extension-function
---

_Saves an enum of the type specified by the first argument and returns its id._

### Syntax ###
```cs
save_enum_typeof(value_name)
```

| Argument | Type | Description |
| --- | --- | --- |
| value_name | string | The name of the enum value. |

**Returns:** Instance Id

### Description

Saves an enum of the type specified by the first argument and returns its id. First load the enum type, then call this function. If the enum can have multiple [values](https://docs.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=netframework-4.7), separate each name by a comma. 

