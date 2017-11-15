---
title: CAPTURE
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/capture/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| index | real | The index in the original string where the group was found |
| length | real | The length of the string captured by the group |
| value | string | The string that was captured by the group |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var match = regex_match(hello, "hello");
var group = match_get_group_by_index(match, 0);
var json = group_get_capture_json(group, 0);
var map = json_decode(json);
```

JSON result:
```json
{
    "index": 0,
    "length": 5,
    "value": "hello"
}
```