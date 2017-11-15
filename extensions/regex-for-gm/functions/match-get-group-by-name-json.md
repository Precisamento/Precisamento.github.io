---
title: match_get_group_by_name_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-group-by-name-json/
layout: extension-function
---

_Gets a group captured by the match via it's name, and returns it as a GROUP json object._

### Syntax ###
```cs
match_get_group_by_name_json(match_id, name, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |
| name | string | The name of the group to get. |
| json_options | real | Additional json options (JO_*). |

**Returns:** String (GROUP object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.groupcollection.item?view=netframework-4.7#System_Text_RegularExpressions_GroupCollection_Item_System_String_)

