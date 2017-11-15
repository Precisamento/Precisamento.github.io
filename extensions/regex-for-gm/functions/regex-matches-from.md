---
title: regex_matches_from
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-matches-from/
layout: extension-function
---

_Searches a string for all occurrences of a regex, beginning at the specified location, and returns the id of the collection._

### Syntax ###
```cs
regex_matches_from(regex_id, input, startAt)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| startAt | real | The position to start from. |

**Returns:** Matches id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

