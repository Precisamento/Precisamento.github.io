---
title: GROUPS
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/groups/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| default | ds_list | A list of ds_maps corresponding to [GROUP]({{site.baseurl}}/extensions/{{page.extension}}/json/group/) objects |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var match = regex_match(hello, "hello");
var json = match_get_groups_json(match, JO_CAPTURES)
var map = json_decode(json);
```

JSON result:
```json
{
    default: [
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
    ]
}
```