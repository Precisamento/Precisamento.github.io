---
title: regex_split_from_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-split-from-json/
layout: extension-function
---

_Splits the input string into a json array beginning at the specified location._

### Syntax ###
```cs
regex_split_from_json(regex_id, input, startAt)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |
| startAt | real | The position to start from. |

**Returns:** String (ARRAY object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.split?view=netframework-4.7#System_Text_RegularExpressions_Regex_Split_System_String_System_Int32_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

