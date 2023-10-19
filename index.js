// import express from "express";
// const app = express();
// const PORT = 8000;
//
// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });
//
// app.listen(PORT, () => {
//   console.log(`Server Ready At PORT: ${PORT}`);
// });

import puppeteer from "puppeteer";

const url = "https://github.com/kaavee315";

const main = async () => {
  // Launch puppeteer browser instance
  const browser = await puppeteer.launch({ headless: "new" });

  // Open blank page in browser instance
  const page = await browser.newPage();

  // Navigate page to URL
  await page.goto(url);

  // Perform HTML DOM Manipulations
  const reducedDOM = await page.evaluate(() => {
    // Getting the profile data
    const profileData = document.querySelector(
      "div.js-profile-editable-replace",
    );

    // Getting important profile data
    const profileImage = profileData.querySelector("img.avatar-user").src;
    const fullname = profileData.querySelector("span.p-name").innerText;
    const username = profileData.querySelector("span.p-nickname").innerText;

    return { profileImage, fullname, username };
  });

  console.log(reducedDOM);

  // Close the browser instance with all associated pages
  await browser.close();
};

main();
