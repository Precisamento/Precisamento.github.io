---
title: Groups and Captures
extension: regex-for-gm
layout: extension-example
category: examples
---

In addition to matches, we can also get information from all of the groups found in a regex, and even their inner captures. This can be done using just pure functions or JSON.

A capture in a regex is anything contained within parentheses. These will always have the index at which they were found in the original string, the length of the string that was captured by the pattern in the parentheses, and they'll have the actual value that was captured.

A group is a superset of a capture. These constructs also have a name, and they know whether they were found inside of the match. 

In this example we'll go over getting information from groups and captures using both methods. To do so, we're going to use a regex pattern that matches sentences. This is the pattern: `(\b(\w+?)[,:;]?\s?)+[?.!]`. We're also going to use a regex option. We're going to compile the regex to yield faster execution speed.

Here is our setup:

```cs
var regex = regex_create("(\b(\w+?)[,:;]?\s?)+[?.!]", RO_COMPILED, 3000);
var input = "This is one sentence. This is a second sentence.";
```

## Function ##

To start off with, first we need to loop through all the matches. We do this in the same way as before.

```cs
var match = regex_match(regex, input);

while(match != -1) 
{
    show_debug_message("Match: " + match_get_value(match));

    //Get information about groups and captures...

    var temp = match_get_next_match(match);
    regex_destroy_id(match);
    match = temp;
}
```

Now let's look into getting groups. We can do so through two functions: `match_get_group_by_name` for named groups, `match_get_group_by_index` for all groups. In this case we don't have any named groups, and we'd like to loop through all of the groups regardless of whether or not they are named, so we'll use the second function. We can find out how many groups are inside of a match using `match_get_group_count`.

```cs
var group_count = match_get_group_count(match);
for(var g = 0; g < group_count; g++) 
{
    var group = match_get_group_by_index(match, g);
    show_debug_message("    Group " + string(g) + ": " + group_get_value(group));

    //Get information about captures.

    regex_destroy_id(group);
}
```

Finally we can view information about the individual captures found within each group. We can get each capture by index, and we can get the total number of captures within a group via `group_get_capture_count`.

```cs
var regex = regex_create("(\b(\w+?)[,:;]?\s?)+[?.!]", RO_COMPILED, 3000);
var input = "This is one sentence. This is a second sentence.";
var match = regex_match(regex, input);

while(match != -1) 
{
    show_debug_message("Match: " + match_get_value(match));

    var group_count = match_get_group_count(match);
    for(var g = 0; g < group_count; g++) 
    {
        var group = match_get_group_by_index(match, g);
        show_debug_message("    Group " + string(g) + ": " + group_get_value(group));
    
        var capture_count = group_get_capture_count(group);
        for(var c = 0; c < capture_count; c++)
        {
            var capture = group_get_capture(group, c);
            show_debug_message("        Capture " + string(c) + ": " + capture_get_value(capture));
            
            regex_destroy_id(capture);
        }
        
        regex_destroy_id(group);
    }

    var temp = match_get_next_match(match);
    regex_destroy_id(match);
    match = temp;
}

regex_destroy_id(regex);
```

When run, you get this output:
```cs
// Match 0: This is one sentence.
//     Group 0: This is one sentence.
//         Capture 0: This is one sentence.
//     Group 1: sentence
//         Capture 0: This 
//         Capture 1: is 
//         Capture 2: one 
//         Capture 3: sentence
//     Group 2: sentence
//         Capture 0: This
//         Capture 1: is
//         Capture 2: one
//         Capture 3: sentence
// Match 1: This is a second sentence.
//     Group 0: This is a second sentence.
//         Capture 0: This is a second sentence.
//     Group 1: sentence
//         Capture 0: This 
//         Capture 1: is 
//         Capture 2: a 
//         Capture 3: second 
//         Capture 4: sentence
//     Group 2: sentence
//         Capture 0: This
//         Capture 1: is
//         Capture 2: a
//         Capture 3: second
//         Capture 4: sentence
```

Now the output may not look exactly how you'd expect it to. In particular the group values might look weird. A group will hold the value of the last capture found by the same parentheses. So if a group has multiple captures, that means that a single parentheses within the pattern was found multiple times. Usually this happens when there is a + or * after a parentheses.

## JSON ##

To get information about groups and captures using JSON, we're going to get a MATCHES collection using `regex_matches_json`. In this instance, we're going to use a special JSON option as well. That is `JO_CAPTURES`. This means when our MATCHES are turned into JSON, it will include information about all of the groups and captures as well. If all you wanted were the groups, you could use `JO_GROUPS`, but in this case we want everything.

So lets look at the code:

```cs
var regex = regex_create("(\b(\w+?)[,:;]?\s?)+[?.!]", RO_COMPILED, 3000);
var input = "This is one sentence. This is a second sentence.";

var json = regex_matches_json(regex, input, JO_CAPTURES);
var map = json_decode(json);
var matches = map[? "default"];
for(var m = 0; m < ds_list_size(matches); m++) 
{
    var match = matches[| m];
    show_debug_message("Match " + string(m) + ": " + match[? "value"]);
    
    var groups = match[? "groups"];
    for(var g = 0; g < ds_list_size(groups); g++) 
    {
        var group = groups[| g];
        show_debug_message("    Group " + string(g) + ": " + group[? "value"]);
        
        var captures = group[? "captures"];
        for(var c = 0; c < ds_list_size(captures); c++) 
        {
            var capture = captures[| c];
            show_debug_message("        Capture " + string(c) + ": " + capture[? "value"]);
        }
    }
}

ds_map_destroy(map);
regex_destroy_id(regex);


// Outputs:
// Match 0: This is one sentence.
//     Group 0: This is one sentence.
//         Capture 0: This is one sentence.
//     Group 1: sentence
//         Capture 0: This 
//         Capture 1: is 
//         Capture 2: one 
//         Capture 3: sentence
//     Group 2: sentence
//         Capture 0: This
//         Capture 1: is
//         Capture 2: one
//         Capture 3: sentence
// Match 1: This is a second sentence.
//     Group 0: This is a second sentence.
//         Capture 0: This is a second sentence.
//     Group 1: sentence
//         Capture 0: This 
//         Capture 1: is 
//         Capture 2: a 
//         Capture 3: second 
//         Capture 4: sentence
//     Group 2: sentence
//         Capture 0: This
//         Capture 1: is
//         Capture 2: a
//         Capture 3: second
//         Capture 4: sentence
```

As you can see, first we loop through a list of MATCH, then from each of those we loop through a list of GROUP, then from each of those we loop through a list of CAPTURE. 

The two versions ouput the same thing. While still a little verbose, this code is relatively streamlined as compared to the function approach. However the other way does give you some extra customization, and is typically necessary if you want to use named groups. So as usual, use the right apporach for the job.