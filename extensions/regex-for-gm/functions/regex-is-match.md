---
title: regex_is_match
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-is-match/
layout: extension-function
---

_Determines whether the regex finds a match in the given string._

### Syntax ###
```cs
regex_is_match(regex_id, input)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |

**Returns:** Bool

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.ismatch?view=netframework-4.7#System_Text_RegularExpressions_Regex_IsMatch_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -1

