---
title: JSON Options
extension: regex-for-gm
category: constants
permalink: /extensions/regex-for-gm/constants/json-options/
layout: extension-constant
---

Here you can find a short description for each of the constants beginning with JO_.

## Description ##

Defines what inside a match or group are to be serialized.

## Values ##

| Name | Description | Value |
| --- | --- | --- |
| NONE | Serializes only the level being called (i.e. Matches only on [regex_matches_json]({{site.baseurl}}/extensions/{{page.extension}}/regex-matches-json/) or groups only on [match_get_groups_json]({{site.baseurl}}/extensions/{{page.extension}}/match-get-groups-json/)). | 0 |
| GROUPS | Serialize the groups, but not the captures. | 1 |
| CAPTURES | Serializes all available information. | 2 |