---
title: Finding Matches
extension: regex-for-gm
layout: extension-example
category: examples
---

Up until now, we have only been determining if a regex found a match. Now we're going to actually determine what and where the match is. 

There are two ways to do this. The first way is through functions. The second way is through JSON. Each way has their place. The function route can seem more complicated, but is faster. The JSON way is easy, especially for matches with a lot of groups, but it is typically slower, as it has to format the result into a json string, then decode the string from Gamemaker. We'll still go through both methods.

In this tutorial, we're going to look for all instances of the letters "abc" inside of a string.

## Function ##

First we must construct our regex and input.

```cs
var regex = regex_create("abc", RO_NONE, 3000);
var input = "abc123abc456abc789";
```

Now we'll search the string for a match.

```cs
var match = regex_match(regex, input);
```

Now we'll display the position the string was found, and then find the next match. We'll repeat this until there are no more matches. To get the position, we will use `match_get_index`. To find the next match, we can call `match_get_next_match`.

```cs
while(match != -1) 
{
    show_debug_message(match_get_value(match) + 
        " found at position " + 
        string(match_get_index(match)) + 
        "."
    );
    var temp = match;
    match = match_get_next_match(match);
    regex_destroy_id(temp);
}
```

Note how we store the match in a temporary variable. That is because all of the objects that are created by the extension must be manually destroyed, otherwise you'll have a memory leak. So we save the id of the match in the variable `temp` and then destroy it once it's no longer needed.

## JSON ##

Once again, first we'll construct our regex and input.

```cs
var regex = regex_create("abc", RO_NONE, 3000);
var input = "abc123abc456abc789";
```

Now we'll get a list of all the matches found in the string. This will be in the format of a JSON array. We'll convert that into Gamemaker data structures using `json_decode`.

```cs
var json = regex_matches_json(regex, input, JO_NONE);
var map = json_decode(json);
```

When you use json_decode, if the root structure of the string is a list, the resulting state structure will be a ds_map with a key `default` that has the list as it's value. That is the case here, so lets get that list.

```cs
var matches = map[? "default"];
```

Each index of the list will hold a ds_map that corresponds to a MATCH object. We'll loop through each MATCH object and disply it's `index` value.

```cs
for(var i = 0; i < ds_list_size(matches); i++) 
{
    var match = matches[| i];
    show_debug_message(match[? "value"] +
        "found at position" +
        string(match[? "index"]) + 
        "."
    );
}
```

## Full Code ##
```cs
//setup
var regex = regex_create("abc", RO_NONE, 3000);
var input = "abc123abc456abc789";

//function
var match = regex_match(regex, input);
while(match != -1) 
{
    show_debug_message(match_get_value(match) + 
        " found at position " + 
        string(match_get_index(match)) + 
        "."
    );
    var temp = match;
    match = match_get_next_match(match);
    regex_destroy_id(temp);
}

//json
var json = regex_matches_json(regex, input, JO_NONE);
var map = json_decode(json);
var matches = map[? "default"];

for(var i = 0; i < ds_list_size(matches); i++) 
{
    var match = matches[| i];
    show_debug_message(match[? "value"] +
        "found at position" +
        string(match[? "index"]) + 
        "."
    );
}

ds_map_destroy(map); //This will cleanup all of the nested data structures as well.

regex_destroy_id(regex);
```