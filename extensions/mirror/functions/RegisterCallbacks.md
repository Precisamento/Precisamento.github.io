---
title: RegisterCallbacks
extension: mirror
category: functions
permalink: /extensions/mirror/functions/RegisterCallbacks/
layout: extension-function
---

_DO NOT CALL!_

### Syntax ###
```cs
RegisterCallbacks(arg1, arg2, arg3, arg4)
```

| Argument | Type | Description |
| --- | --- | --- |
| arg1 | pointer | EventPerformAsync |
| arg2 | pointer | DsMapCreate |
| arg3 | pointer | DsMapAddDouble |
| arg4 | pointer | DsMapAddString |

**Returns:** 0

### Description

Initializes certain functions used for asynchronously interacting with Gamemaker. This function is called by gamemaker, and users should definitely not call it. 

