---
title: regex_replace_number
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-replace-number/
layout: extension-function
---

_Replaces up to a given amount, occurrences of a regex in the input string, and returns the resulting string._

### Syntax ###
```cs
regex_replace_number(regex_id, input, replacement, count)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to modify. |
| replacement | string | The value to replace matches with. |
| count | real | The maximum number of replacements. |

**Returns:** String

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.replace?view=netframework-4.7#System_Text_RegularExpressions_Regex_Replace_System_String_System_String_System_Int32_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

