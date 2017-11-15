---
title: regex_matches_from_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-matches-from-json/
layout: extension-function
---

_Searches a string for all occurrences of a regex, beginning at the specified location, and returns a MATCHES json object._

### Syntax ###
```cs
regex_matches_from_json(regex_id, input, startat, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The id of the string to search. |
| startat | real | The position to start from. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (MATCHES)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.matches?view=netframework-4.7#System_Text_RegularExpressions_Regex_Matches_System_String_System_Int32_)

