---
title: group_get_capture_json
extension: regex-for-gm
category: functions
permalink: /extensions/regex-for-gm/functions/group-get-capture-json/
layout: extension-function
---

_Gets a capture captured by the group via its id, and returns it as a CAPTURE json object._

### Syntax ###
```cs
group_get_capture_json(group_id, index)
```

| Argument | Type | Description |
| --- | --- | --- |
| group_id | real | The id of the group to use. |
| index | real | The index of the capture to get. |

**Returns:** String (CAPTURE object)

### References ###

* [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.capturecollection.item?view=netframework-4.7#System_Text_RegularExpressions_CaptureCollection_Item_System_Int32_)

