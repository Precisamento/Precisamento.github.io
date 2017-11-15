---
title: Splitting Strings Using Regex
extension: regex-for-gm
layout: extension-example
category: examples
---
One of the cool things that the regex library in c# allows you to do is split a string wherever a match from a regex occurs. In this example, we're going to use this functionality to split a shopping list into its individual items.

(Note: To use this functionality as intended, make sure you import the script `regex_split` from the extension. It will make sure to split the input in the most efficient and proper way.)

The pattern we use here will go through the input string and look for a number followed by a period and a space. This is the pattern: `\b\d{1,2}\.\s`.

The function that splits the string will return an array of all of the resulting substrings. We're just going to loop through that array and display the results. Here is the code:

```cs
var regex = regex_create("\b\d{1,2}\.\s", RO_NONE, 3000);
var input = "1. Eggs 2. Bread 3. Milk 4. Coffee 5. Tea";
var array = regex_split(regex, input);
for(var i = 0; i < array_length_1d(array); i++) 
{
    if(array[i] != "") 
    {
        show_debug_message(array[i]);
    }
}
// Outputs:
// Eggs
// Bread
// Milk
// Coffee
// Tea
```

In the code you might notice that we make sure the value isn't an empty string. That is because the split will not remove empty entries found between two matches, but we don't want to display those. In this case there is an empty match at the very beginning of the array. If you don't want to process empty entries, you'll need to include similar code.