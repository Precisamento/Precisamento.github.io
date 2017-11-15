---
title: regex_is_match_from
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-is-match-from/
layout: extension-function
---

_Determines whether the regex finds a match in the given string, beginning from the specified location._

### Syntax ###
```cs
regex_is_match_from(regex_id, input, startat)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| startat | real | The position to start from. |

**Returns:** Bool

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.ismatch?view=netframework-4.7#System_Text_RegularExpressions_Regex_IsMatch_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -1

