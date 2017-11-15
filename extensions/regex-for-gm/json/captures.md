---
title: CAPTURES
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/captures/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| default | ds_list | A list of ds_maps corresponding to [CAPTURE]({{site.baseurl}}/extensions/{{page.extension}}/json/group) objects |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var match = regex_match(hello, "hello");
var group = match_get_group_by_index(match, 0);
var json = group_get_captures_json(group);
var map = json_decode(json);
```

JSON result:
```json
{
    default: [
        {
            index: 0,
            length: 5,
            value: "hello"
        }
    ]
}
```