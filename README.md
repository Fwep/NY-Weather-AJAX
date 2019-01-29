# New York Weather AJAX Request
The code here is a primitive demonstration of the use of AJAX requests. Meteorlogical data about the weather in New York is pulled from one of Google's APIs.


> When does the When does the request get sent?
---
The request gets sent upon loading of the HTML document. 

> When does the response come back?
---
The response arrives after successful receipt of the GET request towards the path specified in the request, and comes after the second `console.log`, being an asynchronous request.

>What's the current weather in New York?
---
At the time of writing, `268.49 K`, or `23.612 F` or `-4.66 C`. Brr!

> Did the page refresh?
---
No, the point of AJAX requests is to eliminate the need for another refresh.


> How could we use different HTTP methods in our request?
---
In the AJAX request, change the value of the `method` key to a different HTML method, such as `POST`, or `PATCH`.