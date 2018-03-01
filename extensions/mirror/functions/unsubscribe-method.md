---
title: unsubscribe_method
extension: mirror
category: functions
permalink: /extensions/mirror/functions/unsubscribe-method/
layout: extension-function
---

_Unsubscribes a method from an event._

### Syntax ###
```cs
unsubscribe_method(type_name, event_name, method_id, publisher_id)
```

| Argument | Type | Description |
| --- | --- | --- |
| type_name | string | The name of the type that defines the event. |
| event_name | string | The name of the event. |
| method_id | double | The id of the method to unsubscribe from the event. |
| publisher_id | double | If it's an instance event, the id of the owner of the event. Otherwise, it must be less than zero (i.e. noone). |

**Returns:** 1

### Description

This function unsubscribes a method from an event. The method can be either a delegate (i.e. an Action) or it can be a MethodInfo. 

### References ###

* Saving a {% include ref.html name="save_method" display="MethodInfo" cat="functions" %}
* Saving an {% include ref.html name="save_method_as_delegate" display="Action" cat="functions" %} or other {% include ref.html name="save_method_as_custom_delegate" display="Delegate" cat="functions" %}.

