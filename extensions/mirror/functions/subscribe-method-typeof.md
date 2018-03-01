---
title: subscribe_method_typeof
extension: mirror
category: functions
permalink: /extensions/mirror/functions/subscribe-method-typeof/
layout: extension-function
---

_Subscribes the first argument to an event._

### Syntax ###
```cs
subscribe_method_typeof(type_name, event_name, publisher_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the event. |
| event_name | string | The name of the event. |
| publisher_id | double | If it's an instance event, the id of the owner of the event. Otherwise, it must be less than zero (i.e. noone). |

**Returns:** 1

### Description

This function subscribes a method to an event. First load the method, then call this function. The method can be either a delegate (i.e. an Action) or it can be a MethodInfo. 

### References ###

* Loading a {% include ref.html name="load_method" display="MethodInfo" cat="functions" %}
* Loading an {% include ref.html name="load_method_as_delegate" display="Action" cat="functions" %} or other {% include ref.html name="load_method_as_custom_delegate" display="Delegate" cat="functions" %}.

