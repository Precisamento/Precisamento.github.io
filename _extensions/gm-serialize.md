---
title: GM Serialize
extension: gm-serialize
permalink: /extensions/gm-serialize/
layout: extension
category: functions
description: This extension provides customizable functions for serializing and deserializing Gamemaker instances.
forums: https://forum.yoyogames.com/index.php?threads/gm-serialize-convert-gamemaker-instances-to-json.38915/
marketplace: https://marketplace.yoyogames.com/assets/5863/gm-serialize
---

Welcome to the homepage for the GM Serialize extension.

This extension provides functions that will serialize and deserialize GM instances to and from json files.

You can download the extension from the [marketplace]({{page.marketplace}}), or ask questions on the [forums]({{page.forums}}) or [Discord]({{site.discord}}).

## Examples

{% include examples.html %}

## Functions

### Base
<ul>
{% include category-li.html name="instance_serialize" %}
{% include category-li.html name="instance_deserialize" %}
{% include category-li.html name="instance_to_map" %}
{% include category-li.html name="instance_from_map" %}
</ul>

### Explicit Helpers
<ul>
{% include category-li.html name="serialize_list" %}
{% include category-li.html name="deserialize_list" %}
{% include category-li.html name="deserialize_array_1d" %}
{% include category-li.html name="serialize_array_2d" %}
{% include category-li.html name="deserialize_array_2d" %}
{% include category-li.html name="serialize_map" %}
{% include category-li.html name="deserialize_map" %}
{% include category-li.html name="serialize_grid" %}
{% include category-li.html name="deserialize_grid" %}
{% include category-li.html name="serialize_nested_instance" %}
{% include category-li.html name="deserialize_nested_instance" %}
{% include category-li.html name="serialize_ignore" %}
</ul>

### Extenstion Helpers
<ul>
{% include category-li.html name="_convert_to_script_map" %}
{% include category-li.html name="_convert_from_script_map" %}
</ul>