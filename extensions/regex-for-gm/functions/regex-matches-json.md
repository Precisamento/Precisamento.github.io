---
title: regex_matches_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-matches-json/
layout: extension-function
---

_Searches a string for all occurrences of a regex, and returns a MATCHES json object._

### Syntax ###
```cs
regex_matches_json(regex_id, input, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to search. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (MATCHES object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

