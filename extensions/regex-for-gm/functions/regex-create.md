---
title: regex_create
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-create/
layout: extension-function
---

_Creates a regex object and returns it's id._

### Syntax ###
```cs
regex_create(pattern, options, timeout)
```

| Argument | Type | Description |
| --- | --- | --- |
| pattern | string | The regex pattern to use. |
| options | real | A bit flag representing the regex options (RO_*) to use. |
| timeout | real | How long the regex can run before timing out. |

**Returns:** Regex id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.-ctor?view=netframework-4.7#System_Text_RegularExpressions_Regex__ctor_System_String_System_Text_RegularExpressions_RegexOptions_System_TimeSpan_)

