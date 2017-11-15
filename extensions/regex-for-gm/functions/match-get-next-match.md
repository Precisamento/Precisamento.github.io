---
title: match_get_next_match
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-next-match/
layout: extension-function
---

_Gets the match after the given match._

### Syntax ###
```cs
match_get_next_match(match_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |

**Returns:** Match id on success; Otherwise -1.

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.match.nextmatch?view=netframework-4.7#System_Text_RegularExpressions_Match_NextMatch)

### Exceptions ###

* RegexMatchTimeoutException: Returns -2

