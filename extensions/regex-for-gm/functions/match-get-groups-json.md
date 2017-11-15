---
title: match_get_groups_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/match-get-groups-json/
layout: extension-function
---

_Gets the groups captured by the match, and returns it as a GROUPS json object_

### Syntax ###
```cs
match_get_groups_json(match_id, json_options)
```

| Argument | Type | Description |
| --- | --- | --- |
| match_id | real | The id of the match to use. |
| json_options | real | Additional json options (JO_*) |

**Returns:** String (GROUPS object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.match.groups?view=netframework-4.7#System_Text_RegularExpressions_Match_Groups)

