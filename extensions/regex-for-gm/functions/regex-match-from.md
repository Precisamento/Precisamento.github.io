---
title: regex_match_from
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-match-from/
layout: extension-function
---

_Searches a string for the first occurrence of a regex, beginning from the specified location, and returns the match id._

### Syntax ###
```cs
regex_match_from(regex_id, input, startat)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| startat | real | The position to start from. |

**Returns:** Match id on success; Otherwise -1

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2.

