---
title: regex_replace
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-replace/
layout: extension-function
---

_Replaces all occurrences of a regex in the input string, and returns the resulting string._

### Syntax ###
```cs
regex_replace(regex_id, input, replacement)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to modify. |
| replacement | string | The value to replace matches with. |

**Returns:** String

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.replace?view=netframework-4.7#System_Text_RegularExpressions_Regex_Replace_System_String_System_String_)

### Exceptions ###

* RegexMatchTimeoutException: Returns ""

