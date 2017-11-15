---
title: regex_split
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/regex-split/
layout: extension-function
---

_Splits the input string based on the pattern defined by the regex, and returns an array of the resulting substrings._

### Syntax ###
```cs
regex_split(regex_id, input, count = -1, start_at = 0)
```

| Argument | Type | Description |
| --- | --- | --- |
| regex_id | real | The id of the regex to use. |
| input | string | The string to split. |
| count | real | The maximum amount of splits. |
| start_at | real | The position to start from. |

**Returns:** Array

### Exceptions ###

* RegexMatchTimeoutException: Returns noone

### Description ###

This is a helper script included with the library to split strings based on a regex. It will split strings in an efficient manner and return a GM data structure containing the result. Note that this function must be imported.