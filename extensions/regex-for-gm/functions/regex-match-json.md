---
title: regex_match_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-match-json/
layout: extension-function
---

_Searches a string for the first occurrence of a regex, and returns a MATCH json object._

### Syntax ###
```cs
regex_match_json(regex_id, input, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (MATCH object) on success; otherwise ""

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.match?view=netframework-4.7#System_Text_RegularExpressions_Regex_Match_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

