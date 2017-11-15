---
title: match_get_result
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-result/
layout: extension-function
---

_Gets the matched string formatted as specified._

### Syntax ###
```cs
match_get_result(match_id, format)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |
| format | string | The replacement pattern to use. |

**Returns:** String

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.match.result?view=netframework-4.7#System_Text_RegularExpressions_Match_Result_System_String_)

### Exceptions ###

* NotSupportedException: Returns ""

