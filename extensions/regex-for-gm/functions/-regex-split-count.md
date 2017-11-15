---
title: _regex_split_count
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/-regex-split-count/
layout: extension-function
---

_Splits the input string with a given amount of splits and returns the split id._

### Syntax ###
```cs
_regex_split_count(regex_id, input, count)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |
| count | real | The maximum amount of splits. |

**Returns:** Split id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.split?view=netframework-4.7#System_Text_RegularExpressions_Regex_Split_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

