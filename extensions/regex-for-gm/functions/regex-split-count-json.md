---
title: regex_split_count_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-split-count-json/
layout: extension-function
---

_Splits the input string into a json array with a maximum amount of splits._

### Syntax ###
```cs
regex_split_count_json(regex_id, input, count)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |
| count | real | The maximum amount of splits. |

**Returns:** String (ARRAY object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.split?view=netframework-4.7#System_Text_RegularExpressions_Regex_Split_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

