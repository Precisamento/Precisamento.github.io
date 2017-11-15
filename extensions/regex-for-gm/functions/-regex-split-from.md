---
title: _regex_split_from
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/-regex-split-from/
layout: extension-function
---

_Splits the input string beginning at the specified location, and returns the split id._

### Syntax ###
```cs
_regex_split_from(regex_id, input, startAt)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |
| startAt | real | The position to start from. |

**Returns:** Split id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.split?view=netframework-4.7#System_Text_RegularExpressions_Regex_Split_System_String_System_Int32_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

