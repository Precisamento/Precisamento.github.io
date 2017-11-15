---
title: Matching Social Security Numbers
extension: regex-for-gm
layout: extension-example
category: examples
---

One common use of regular expressions is to determine if an input is valid. In this example, we determine if a string is a valid Social Security Number. 

In the United States, a Social Security has this format: XXX-XX-XXX. So we will use this pattern to determine validity: `^\d{3}-\d{2}-\d{4}$`.

First off we'll create our input. In this case it will just be an array that we loop through.

```cs
var input;
input[0] = "111-22-3333";
input[1] = "111-2-3333";
input[2] = "11-22-3333";
```

Now we can create our regex, loop through the input, and output whether the SSN was formatted correctly.

```cs
var input;
input[0] = "111-22-3333";
input[1] = "111-2-3333";
input[2] = "11-22-3333";

var regex = regex_create("^\d{3}-\d{2}-\d{4}$", RO_NONE, 3000);

for(var i = 0; i < array_length_1d(input); i++) 
{
    if(regex_is_match(regex, input[i]))
    {
        show_debug_message(input[i] + " is a valid SSN");
    }
    else
    {
        show_debug_message(input[i] " is not a valid SSN");
    }
}

// Output:
// 111-22-3333 is a valid SSN
// 111-2-3333 is not a valid SSN
// 11-22-3333 is not a valid SSN
```