---
title: compile_string
extension: mirror
category: functions
permalink: /extensions/mirror/functions/compile-string/
layout: extension-function
---

_Compiles a string in a .NET language and initializes the resulting assembly._

### Syntax ###
```cs
compile_string(language, code)
```

| Argument | Type | Description |
| --- | --- | --- |
| language | string | The language used in the string (csharp, fsharp, visualbasic) |
| code | string | The code to be compiled. |

**Returns:** String (Empty string on success; error messages on failure).

### Description

This function compiles a string of the given language into an assembly, and then loads that assembly into this [app domain](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain?view=netframework-4.7).

