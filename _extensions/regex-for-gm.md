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
<ul>
{% include examples.html %}
</ul>

## Functions ##

### Creation and Destruction ###
<ul>
{% include category-li.html name="regex_create" %}
{% include category-li.html name="regex_destroy_id" %}
{% include category-li.html name="regex_destroy_all" %}
</ul>

### Basics ###
<ul>
{% include category-li.html name="regex_is_match" %}
{% include category-li.html name="regex_is_match_from" %}
{% include category-li.html name="regex_match" %}
{% include category-li.html name="regex_match_from" %}
</ul>

### Replacing ###
<ul>
{% include category-li.html name="regex_replace" %}
{% include category-li.html name="regex_replace_from" %}
{% include category-li.html name="regex_replace_count" %}
{% include category-li.html name="regex_replace_from_count" %}
</ul>

### Matches ###
<ul>
{% include category-li.html name="regex_matches" %}
{% include category-li.html name="regex_matches_from" %}
{% include category-li.html name="matches_get_count" %}
{% include category-li.html name="matches_get_match" %}
{% include category-li.html name="match_get_next_match" %}
{% include category-li.html name="match_get_index" %}
{% include category-li.html name="match_get_length" %}
{% include category-li.html name="match_get_value" %}
{% include category-li.html name="match_get_result" %}
{% include category-li.html name="match_get_group_by_name" %}
{% include category-li.html name="match_get_group_by_index" %}
{% include category-li.html name="match_get_group_count" %}
</ul>

### Groups ###
<ul>
{% include category-li.html name="group_get_index" %}
{% include category-li.html name="group_get_length" %}
{% include category-li.html name="group_get_value" %}
{% include category-li.html name="group_get_success" %}
{% include category-li.html name="group_get_name" %}
{% include category-li.html name="group_get_capture" %}
{% include category-li.html name="group_get_capture_count" %}
</ul>

### Captures ###
<ul>
{% include category-li.html name="capture_get_index" %}
{% include category-li.html name="capture_get_length" %}
{% include category-li.html name="capture_get_value" %}
</ul>

### JSON ###
<ul>
{% include category-li.html name="regex_matches_json" %}
{% include category-li.html name="regex_matches_from_json" %}
{% include category-li.html name="regex_match_json" %}
{% include category-li.html name="regex_match_from_json" %}
{% include category-li.html name="match_get_group_json" %}
{% include category-li.html name="match_get_group_by_name_json" %}
{% include category-li.html name="match_get_group_by_index_json" %}
{% include category-li.html name="group_get_captures_json" %}
{% include category-li.html name="group_get_capture_json" %}
{% include category-li.html name="regex_split_json" %}
{% include category-li.html name="regex_split_from_json" %}
{% include category-li.html name="regex_split_count_json" %}
</ul>

### Split ###
<ul>
{% include category-li.html name="regex_split" %}
{% include category-li.html name="_regex_split" %}
{% include category-li.html name="_regex_split_count" %}
{% include category-li.html name="_regex_split_from" %}
{% include category-li.html name="_regex_split_from_count" %}
{% include category-li.html name="_split_get_size" %}
{% include category-li.html name="_split_get_count" %}
{% include category-li.html name="_split_get_index" %}
{% include category-li.html name="_split_fill_buffer" %}
</ul>

### Other ###
<ul>
{% include category-li.html name="regex_get_cache_size" %}
{% include category-li.html name="regex_set_cache_size" %}
</ul>

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