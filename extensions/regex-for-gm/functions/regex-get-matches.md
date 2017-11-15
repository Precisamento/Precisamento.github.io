---
title: regex_get_matches
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-get-matches/
layout: extension-function
---

_Searches a string for all occurrences of a regex, and returns the id of the collection._

### Syntax ###
```cs
regex_get_matches(regex_id, input)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |

**Returns:** Matches id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

