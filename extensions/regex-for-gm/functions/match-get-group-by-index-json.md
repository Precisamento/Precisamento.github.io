---
title: match_get_group_by_index_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-group-by-index-json/
layout: extension-function
---

_Gets a group captured by the match via its index, and returns it as a GROUP json object._

### Syntax ###
```cs
match_get_group_by_index_json(match_id, index, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |
| index | real | The index of the group to get. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (GROUP object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.groupcollection.item?view=netframework-4.7#System_Text_RegularExpressions_GroupCollection_Item_System_Int32_)

