---
title: regex_match_from_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-match-from-json/
layout: extension-function
---

_Searches a string for the first occurrence of a regex, beginning from the specified location, and returns a MATCH json object._

### Syntax ###
```cs
regex_match_from_json(regex_id, input, startat, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| startat | real | The location to start from. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (MATCH object) on success; otherwise ""

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

