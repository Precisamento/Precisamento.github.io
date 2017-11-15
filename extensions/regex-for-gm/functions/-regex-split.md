---
title: _regex_split
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/-regex-split/
layout: extension-function
---

_Splits the input string, and returns the split id._

### Syntax ###
```cs
_regex_split(regex_id, input)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |

**Returns:** Split id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.split?view=netframework-4.7#System_Text_RegularExpressions_Regex_Split_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

