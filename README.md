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

## Decisions Taken For Easy Future Scalability

### 1. Added Services Folder

I added a seperate Services Folder for better code structure and documentation.
It also increases the scalability of the whole project as we can just add a new service and call that service as a function in index file.
This moreover make the code less coupled together in-turn making the code quality richer.

### 2. Added Utils Folder

I added a seperate utils folder for storing files related to all utility functions like "Connecting To Database" or "Importing Environment Variables".
This in turn makes the code much cleaner and documented.

## Steps To Setup And Run This Project Locally

> **_NOTE:_** Ensure that you have node and yarn installed locally in your system.

1. Clone the repository using the "git clone" command along with the url given on click of the code button.

- Ex - `git clone https://github.com/officiallysidsingh/dom-reducer.git"

2. Open your terminal in that cloned repository or go to that repository using the "cd" command.

- Ex - `cd dom-reducer`

3. Install all the yarn packages using the `yarn` or the `yarn install` command.

4. Run the project locally in development environment using the `yarn dev` command.
