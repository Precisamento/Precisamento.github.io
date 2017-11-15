---
title: MATCH
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/match/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| index | real | The index in the original string where the match was found |
| length | real | The length of the matched string |
| success | bool | Whether the match was found or not |
| value | string | The string that was matched |
| (optional) groups | ds_list | A list of ds_maps corresponding to [GROUP]({{site.baseurl}}/extensions/{{page.extension}}/json/group) objects |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var json = regex_match_json(hello, "hello", JO_CAPTURES);
var map = json_decode(json);
```

JSON result:
```json
{
    "index": 0,
    "length": 5,
    "success": 1,
    "value": "hello",
    "groups": [
        {
            "index": 0,
            "length": 5,
            "success": 1,
            "name": "0",
            "value": "hello",
            "captures": [
                {
                    "index": 0,
                    "length": 5,
                    "value": "hello"
                }
            ]
        }
    ]
}
```