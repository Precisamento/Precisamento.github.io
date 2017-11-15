---
title: regex_match
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-match/
layout: extension-function
---

_Searches a string for the first occurrence of a regex, and returns the match id._

### Syntax ###
```cs
regex_match(regex_id, input)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |

**Returns:** Match id on success; otherwise -1

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.match?view=netframework-4.7#System_Text_RegularExpressions_Regex_Match_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

