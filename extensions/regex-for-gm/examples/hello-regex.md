---
title: Hello, Regex
extension: regex-for-gm
layout: extension-example
category: examples
---

The simplest possible way to use this library is to use the `regex_is_match` method. It simply ensures that a pattern can be found within a particular string. This can be very useful for determining if strings are in a specific format.

In this example, we determine if a string contains the word "hello".

First we must create the regex. For this example, we're not going to pass any options, and we'll just give it a timeout of 3000ms. That number is completely arbitrary, so don't worry too much about it.

```cs
var regex = regex_create("hello", RO_NONE, 3000);
```

Now lets see if we can find the regex inside of a string.

```cs
var found = regex_is_match(regex, "Hello, Regex");
if(found) 
{
    show_debug_message("Found the string!");
}
else
{
    show_debug_message("Did not find the string.");
}
```

If we run the code right now, we'll see that the string wasn't found! That is because regex is case-sensitive, meaning that capital letters will only match other capital letters. There is an option to turn this off however. For now, let's correct just change our pattern.

```cs
var regex = regex_create("Hello", RO_NONE, 3000);
```

Now when we run the code, we'll see the first message!

If you wanted to change the options instead of the pattern, you would do this instead:

```cs
var regex = regex_create("hello", RO_IGNORE_CASE, 3000);
```

And you'll get the same result.