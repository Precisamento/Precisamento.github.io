---
title: match_get_group_by_index
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-group-by-index/
layout: extension-function
---

_Gets a group captured by the match via its index, and returns its id._

### Syntax ###
```cs
match_get_group_by_index(match_id, index)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |
| index | real | The index of the group to get. |

**Returns:** Group id.

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.groupcollection.item?view=netframework-4.7#System_Text_RegularExpressions_GroupCollection_Item_System_Int32_)

