---
title: Replacing Matches
extension: regex-for-gm
layout: extension-example
category: examples
---
One interesting thing you can do with regular expressions is replacing patterns found in a string with something else. The something else can be a plain old string, or it can be a special type of pattern itself, called a [replacement pattern](https://docs.microsoft.com/en-us/dotnet/standard/base-types/substitutions-in-regular-expressions).

In this example we perform a replacement operation that replaces a number that looks like a currency with the same number prefixed with a $ sign. The pattern we use to match is `\b\d+\.\d{2}\b`. The replacement pattern is `$$$&`. The first two $ signs in the replacement pattern represent a literal dollar sign. The $& will then copy the matched string into the result.

Here is the actual code we use:

```cs
var regex = regex_create("\b\d+\.\d{2}\b", RO_NONE, 3000);
replacement = "$$$&";
input = "Total Cost: 103.64";
show_debug_message(regex_replace(regex, input, replacement));
regex_destroy_id(regex);

// output:
// Total Cost: $103.64
```