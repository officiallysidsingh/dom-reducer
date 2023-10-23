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

  // Making DOM For Reduced Profile Data
  const reducedProfile = `
    <div aria-label="Profile Card">
      <img src="${profileContainer.profileImage}" aria-label="Profile Image">
      <div aria-label="Profile Information">
        <h2 aria-label="Full Name">${profileContainer.fullname}</h2>
        <h2 aria-label="UserName">${profileContainer.username}</h2>
      </div>
    </div>
  `;

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

  // Making DOM For Reduced Pinned Repository Data
  const reducedPinnedRepo = `
    <div aria-label="Pinned Repositories">
        <ul aria-label="List Of Pinned Repositories">
          ${pinnedRepoContainer.map(
            (item) =>
              `<li>
              <h2 aria-label="Repository Title">${item.repoTitle}</h2>
              <p aria-label="Repository Description">${item.repoDesc}</p>
            </li>`,
          )}
        </ul>
    </div>
  `;

  // Perform Manipulations On Contributions Container
  const contributionsContainer = await page.evaluate(() => {
    // Getting the contribution data
    const contributionData = document.querySelector(
      "div.js-yearly-contributions",
    );

    // Important Contribution Data
    const currYrContri = contributionData.querySelector("h2").innerText;
    const orgsContainer = contributionData.querySelectorAll(
      "div.js-org-filter-links-container > nav > a",
    );

    const orgsContributedTo = Array.from(orgsContainer).map((item) => {
      const orgName = item.innerText;
      return orgName;
    });

    return { currYrContri, orgsContributedTo };
  });

  // Making DOM For Reduced Contributions Data
  const reducedContribution = `
    <div aria-label="Contributions">
      <h2 aria-label="Current Year Contributions">${
        contributionsContainer.currYrContri
      }</h2>
      <ul aria-label="Organisations Contributed To">
        ${contributionsContainer.orgsContributedTo.map(
          (item) =>
            `<li>
            <h2 aria-label="Organisation Name">${item}</h2>
          </li>`,
        )}
      </ul>
    </div>
  `;

  // Reduced DOM
  const reducedDOM = `
    <div aria-label="Page Container">
      ${reducedProfile}
      ${reducedPinnedRepo}
      ${reducedContribution}
    </div>
  `;

  // Send New DOM
  res.send(reducedDOM);

  // Close the browser instance with all associated pages
  await browser.close();
};

export default reduceDOM;
