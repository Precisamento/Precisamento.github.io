---
title: Regex For GM
extension: regex-for-gm
permalink: /extensions/regex-for-gm/
layout: extension
category: functions
description: This extension brings the powerful .NET regular expression engine to Gamemaker through an extensive set of functions.
---

Welcome to the homepage for the regex extension!

This extension brings the wonderful C# regex engine to Gamemaker through an extensive set of functions.

For more information on what a regex is and how to use it, you can go [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions). To determine what patterns and constructs are supported, you can go [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

## Examples ##

{% include examples.html %}

## Functions ##

### Creation and Destruction ###

* [regex_create]({{ site.baseurl }}{{ page.permalink }}functions/regex-create)
* [regex_destroy_id]({{ site.baseurl }}{{ page.permalink }}functions/regex-destroy-id)
* [regex_destroy_all]({{ site.baseurl }}{{ page.permalink }}functions/regex-destroy-all)

### Basics ###

* [regex_is_match]({{ site.baseurl }}{{ page.permalink }}functions/regex-is-match)
* [regex_is_match_from]({{ site.baseurl }}{{ page.permalink }}functions/regex-is-match-from)
* [regex_match]({{ site.baseurl }}{{ page.permalink }}functions/regex-match)
* [regex_match_from]({{ site.baseurl }}{{ page.permalink }}functions/regex-match-from)

### Replacing ###
* [regex_replace]({{ site.baseurl }}{{ page.permalink }}functions/regex-replace)
* [regex_replace_from]({{ site.baseurl }}{{ page.permalink }}functions/regex-replace-from)
* [regex_replace_count]({{ site.baseurl }}{{ page.permalink }}functions/regex-replace-count)
* [regex_replace_from_count]({{ site.baseurl }}{{ page.permalink }}functions/regex-replace-from-count)

### Matches ###
* [regex_matches]({{ site.baseurl }}{{ page.permalink }}functions/regex-matches)
* [regex_matches_from]({{ site.baseurl }}{{ page.permalink }}functions/regex-matches-from)
* [matches_get_count]({{ site.baseurl }}{{ page.permalink }}functions/matches-get-count)
* [matches_get_match]({{ site.baseurl }}{{ page.permalink }}functions/matches-get-match)
* [match_get_next_match]({{ site.baseurl }}{{ page.permalink }}functions/match-get-next-match)
* [match_get_index]({{ site.baseurl }}{{ page.permalink }}functions/match-get-index)
* [match_get_length]({{ site.baseurl }}{{ page.permalink }}functions/match-get-length)
* [match_get_value]({{ site.baseurl }}{{ page.permalink }}functions/match-get-value)
* [match_get_result]({{ site.baseurl }}{{ page.permalink }}functions/match-get-result)
* [match_get_group_by_name]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-by-name)
* [match_get_group_by_index]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-by-index)
* [match_get_group_count]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-count)

### Groups ###
* [group_get_index]({{ site.baseurl }}{{ page.permalink }}functions/group-get-index)
* [group_get_length]({{ site.baseurl }}{{ page.permalink }}functions/group-get-length)
* [group_get_value]({{ site.baseurl }}{{ page.permalink }}functions/group-get-value)
* [group_get_success]({{ site.baseurl }}{{ page.permalink }}functions/group-get-success)
* [group_get_name]({{ site.baseurl }}{{ page.permalink }}functions/group-get-name)
* [group_get_capture]({{ site.baseurl }}{{ page.permalink }}functions/group-get-capture)
* [group_get_capture_count]({{ site.baseurl }}{{ page.permalink }}functions/group-get-capture-count)

### Captures ###
* [capture_get_index]({{ site.baseurl }}{{ page.permalink }}functions/capture-get-index)
* [capture_get_length]({{ site.baseurl }}{{ page.permalink }}functions/capture-get-length)
* [capture_get_value]({{ site.baseurl }}{{ page.permalink }}functions/capture-get-value)

### JSON ###
* [regex_matches_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-matches-json)
* [regex_matches_from_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-matches-from-json)
* [regex_match_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-match-json)
* [regex_match_from_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-match-from-json)
* [match_get_group_json]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-json)
* [match_get_group_by_name_json]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-by-name-json)
* [match_get_group_by_index_json]({{ site.baseurl }}{{ page.permalink }}functions/match-get-group-by-index-json)
* [group_get_captures_json]({{ site.baseurl }}{{ page.permalink }}functions/group-get-captures-json)
* [group_get_capture_json]({{ site.baseurl }}{{ page.permalink }}functions/group-get-capture-json)
* [regex_split_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-split-json)
* [regex_split_from_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-split-from-json)
* [regex_split_count_json]({{ site.baseurl }}{{ page.permalink }}functions/regex-split-count-json)


### Split ###
* [regex_split]({{ site.baseurl }}{{ page.permalink }}functions/regex-split) (Use this one)
* [\_regex_split]({{ site.baseurl }}{{ page.permalink }}functions/-regex-split)
* [\_regex_split_count]({{ site.baseurl }}{{ page.permalink }}functions/-regex-split-count)
* [\_regex_split_from]({{ site.baseurl }}{{ page.permalink }}functions/-regex-split-from)
* [\_regex_split_from_count]({{ site.baseurl }}{{ page.permalink }}functions/-regex-split-from-count)
* [\_split_get_size]({{ site.baseurl }}{{ page.permalink }}functions/-split-get-size)
* [\_split_get_count]({{ site.baseurl }}{{ page.permalink }}functions/-split-get-count)
* [\_split_get_index]({{ site.baseurl }}{{ page.permalink }}functions/-split-get-index)
* [\_split_fill_buffer]({{ site.baseurl }}{{ page.permalink }}functions/-split-fill-buffer)

### Other ###
* [regex_get_cache_size]({{ site.baseurl }}{{ page.permalink }}functions/regex-get-cache-size)
* [regex_set_cache_size]({{ site.baseurl }}{{ page.permalink }}functions/regex-set-cache-size)

## Constants ##
* [RO_*]({{ site.baseurl }}{{ page.permalink }}constants/regex-options)
* [JO_*]({{ site.baseurl }}{{ page.permalink }}constants/json-options)

## JSON Objects ##
* [MATCHES]({{ site.baseurl }}{{ page.permalink }}json/matches)
* [MATCH]({{ site.baseurl }}{{ page.permalink }}json/match)
* [GROUPS]({{ site.baseurl }}{{ page.permalink }}json/groups)
* [GROUP]({{ site.baseurl }}{{ page.permalink }}json/group)
* [CAPTURES]({{ site.baseurl }}{{ page.permalink }}json/captures)
* [CAPTURE]({{ site.baseurl }}{{ page.permalink }}json/capture)