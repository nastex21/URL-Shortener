Challenge: https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice

Demo: https://fcc-url-shortener-project.glitch.me/

CHALLENGE: 

I can POST a URL to [project_url]/api/shorturl/new and I will receive a shortened URL in the JSON response.

Example : {"original_url":"www.google.com","short_url":1}

If I pass an invalid URL that doesn't follow the http(s)://www.example.com(/more/routes) format, 
the JSON response will contain an error like {"error":"invalid URL"}

When I visit the shortened URL, it will redirect me to my original link.
