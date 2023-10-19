# DOM Reducer

A Project to reduce HTML DOM for LLM to understand easily.

## Choices Made Along The Way

I thought of making a backend service to integrate better with the LLM Model through APIs.
I am using Node.js and Express.js for making the backend service and Puppeteer for Web Scraping.

### Why Javascript

I am using Javascript as I am more familiar with its ecosystem and it provides better tooling for scraping and manipulating webpages.

### Why Node and Express

Node as a runtime has been for a long time compared to Bun.
It's codebase and community is more mature that Bun.
So, it's less likely to encounter an error in production anytime due to a Node issue.
<br><br>
Express as a backend framework goes hand in hand with Node due to its ease of use and its simplistic code structure.
Moreover, comparing its alternatives like Fastify and Koa, its evident that Express has been in the market the longest.
Also, Express has more success rate with more requests per seconds when the service has to do some calculations rather than just fetching output from database.

### Why Puppeteer

Most of the websites nowadays are SPA(Single Page Applications) and Dynamic Sites which are easier to scrape and manipulate using Puppeteer.
It's alternatives being Cheerio is a great tool for websites where the DOM isn't complex and the website is made with pure HTML, CSS and Javascript.
Nowadays most of the websites are built using js frameworks like React which makes the DOM complex for Cheerio to scrape and manipulate.
