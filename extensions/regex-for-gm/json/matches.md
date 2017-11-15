---
title: MATCHES
extension: regex-for-gm
category: json
permalink: /extensions/regex-for-gm/json/matches/
layout: extension-constant
---

## Contents ##

| Key | Type | Value |
| --- | --- | --- |
| default | ds_list | A list of ds_maps corresponding to [MATCH]({{site.baseurl}}/extensions/{{page.extension}}/json/match/) objects |

## Example ##

Code:
```cs
var hello = regex_create("hello", RO_NONE, 3000);
var json = regex_matches_json(hello, "hello", JO_CAPTURES);
var map = json_decode(json);
```

JSON result:
```json
{
    "default": [
        {
            index: 0,
            length: 5,
            success: 1,
            value: "hello",
            groups: [
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
    ]
}
```