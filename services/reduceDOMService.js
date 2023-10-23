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

  // Perform Manipulations On Pinned Repositories Container
  const pinnedRepoContainer = await page.evaluate(() => {
    // Getting the pinned repositories data
    const pinnedRepoData = document.querySelectorAll(
      "div.js-pinned-items-reorder-container > ol > li",
    );

    // Mapping over repositories array
    return Array.from(pinnedRepoData).map((item) => {
      // Important pinned repository data
      const repoTitle = item.querySelector("span.repo").innerText;
      const repoDesc = item.querySelector("p.pinned-item-desc").innerText;

      return { repoTitle, repoDesc };
    });
  });

  console.log(pinnedRepoContainer);

  // Close the browser instance with all associated pages
  await browser.close();
};

export default reduceDOM;
