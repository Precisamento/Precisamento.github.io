---
title: GROUP
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/group/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| index | real | The index in the original string where the group was found |
| length | real | The length of the string captured by the group |
| success | bool | Whether the group was found or not |
| name | string | The name of the group |
| value | string | The string that was captured by the group |
| (optional) captures | ds_list | A list of ds_maps corresponding to [CAPTURE]({{site.baseurl}}/extensions/{{page.extension}}/json/group) objects |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var match = regex_match(hello, "hello");
var json = match_get_group_by_index_json(match, 0, JO_CAPTURES);
var map = json_decode(json);
```

JSON result:
```json
{
    index: 0,
    length: 5,
    success: 1,
    name: "0",
    value: "hello",
    captures: [
        {
            index: 0,
            length: 5,
            value: "hello"
        }
    ]
}
```