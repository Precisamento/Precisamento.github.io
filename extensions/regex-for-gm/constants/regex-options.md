---
title: Regex Options
extension: regex-for-gm
category: constants
permalink: /extensions/regex-for-gm/constants/regex-options/
layout: extension-constant
---

Here you can find a short description for each of the constants beginning with RO_. For more information on each option, go [here](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regexoptions?view=netframework-4.7.1).

## Description ##

Defines a set of flags that can be used to set regex options. They can be combined using the bitwise-or (\|) operator.

## Values ##

| Name | Description | Value |
| --- | --- | --- |
| NONE | No additional options | 0 |
| IGNORE_CASE | Spcifies case-insensitive matching | 1 |
| MULTILINE | Changes the meaning of ^ and $ to match beginning and end of line | 2 |
| EXPLICIT_CAPTURE | Capture only named groups | 4 |
| COMPILED | Compiled the regex to an assembly | 8 |
| SINGLELINE | Makes (.) match all characters, including \n | 16 |
| IGNORE_PATTERN_WHITESPACE | Eliminates pattern whitespace and enables comments | 32 |
| RIGHT_TO_LEFT | Searches start from the right | 64 |
| ECMA_SCRIPT | Enables ECMAScript-compliant behaviour for the expression | 256 |
| CULTURE_INVARIANT | Culture differences in language are ignored | 512 |