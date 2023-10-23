import puppeteer from "puppeteer";

const reduceDOM = async (req, res) => {
  // Getting url from request body
  const { url } = req.body;

  // Launch puppeteer browser instance
  const browser = await puppeteer.launch({ headless: "new" });

  // Open blank page in browser instance
  const page = await browser.newPage();

  // Navigate page to URL
  await page.goto(url);

  // Perform Manipulations On Profile Container
  const profileContainer = await page.evaluate(() => {
    // Getting the profile data
    const profileData = document.querySelector(
      "div.js-profile-editable-replace",
    );

    // Important profile data
    const profileImage = profileData.querySelector("img.avatar-user").src;
    const fullname = profileData.querySelector("span.p-name").innerText;
    const username = profileData.querySelector("span.p-nickname").innerText;

    return { profileImage, fullname, username };
  });

  console.log(profileContainer);

  // Close the browser instance with all associated pages
  await browser.close();
};

export default reduceDOM;
