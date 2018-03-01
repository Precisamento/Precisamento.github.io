---
title: compile_files
extension: mirror
category: functions
permalink: /extensions/mirror/functions/compile-files/
layout: extension-function
---

_Compiles a set of files in a .NET language and initializes the resulting assembly._

### Syntax ###
```cs
compile_files(language, files)
```

| Argument | Type | Description |
| --- | --- | --- |
| language | string | The language used in the files (csharp, fsharp, visualbasic) |
| files | string | The files to be compiled, seperated by a comma ("System.cs,System.Collections.cs"). |

**Returns:** String (Empty string on success; error messages on failure).

### Description

This function compiles a set of files in a .NET language and initializes the resulting assembly. 

