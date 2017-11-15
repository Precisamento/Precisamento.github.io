---
title: matches_get_match
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/matches-get-match/
layout: extension-function
---

_Gets the match at the given index from a matches object._

### Syntax ###
```cs
matches_get_match(matches_id, index)
```

| Argument | Type | Description |
| --- | --- | --- |
| matches_id | real | The id of the matches object to use. |
| index | real | The index of the match. |

**Returns:** Match id

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.matchcollection.item?view=netframework-4.7#System_Text_RegularExpressions_MatchCollection_Item_System_Int32_)

### Exceptions ###

* ArgumentOutOfRangeException: Returns -1

