---
title: 'If vs switch statement in javascript'
keywords: 'allbest, ternary operator, ternary operator example, ternary operator in JavaScript'
description: 'if vs switch statement in javascript. A switch statement is used to execute a block of code based on a matching expression, while an if statement is used to execute a block of code based on a boolean expression.'
cover_image: '/post-images/if-vs-switch.png'
image_alt: 'if vs switch statement javascript picture'
bg_color: '#a249fd'
post_date: 'February 7, 2023'
---

<p style="padding-bottom: 10px">A switch statement is used to execute a block of code based on a matching expression, while an if statement is used to execute a block of code based on a boolean expression.
</p>

<h3 style="padding-bottom: 10px">Let's look at the code below</h3>

<pre style="background: #16181a; border-radius: 10px; padding: 10px; margin: 0px">
let day = "";
let dayNumber = 1;

if (dayNumber == 1) {
    day = "Sunday";
} else if (dayNumber == 2) {
    day = "Monday";
} else if (dayNumber == 3) {
    day = "Tuesday";
} // ...
</pre>

<p style="padding-top: 10px; padding-bottom: 10px">As you can see <span style="background: #16181a; padding: 2px 4px; border-radius: 20px;">dayNumber</span> is being compared in each if statements. This is where switch statement comes handy.</p>

<h3 style="padding-bottom: 10px">Same code using switch statements</h3>

<pre style="background: #16181a; border-radius: 10px; padding: 10px; margin: 0px">
let day = "";
let dayNumber = 1;

switch (dayNumber) {
    case 0:
        day = "Sunday";
        break;
    case 1: 
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    //...
    default:
        break;
}
</pre>

<p style="padding-top: 10px; padding-bottom: 10px">As you can see the code is more easier to read and debug compared to if statements.</p>
