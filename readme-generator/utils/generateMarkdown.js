// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  const addLicense = (license) => {
    if (!license) {
      return "";
    }
  };
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseData = data.license;
  switch (licenseData) {
    case 0:
      apache =
        "Licensed under the [Apache License](https://opensource.org/licenses/Apache-2.0).";
    case 1:
      gnu =
        "Licensed under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).";
    case 2:
      mit =
        "Licensed under the [MIT License](https://opensource.org/licenses/MIT).";
    case 3:
      odc =
        "Licensed under the [Open Data Commons](https://opendatacommons.org/licenses/by/).";
    default:
      none = "No license chosen";
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  🏅
  ![badge](https://img.shields.io/badge/license-${response.license})
  🏅<br />
  
  <h1 align="center">${response.title} </h1>
     
  ## Description
   ${response.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Purpose](#purpose)
  - [License](#license)
  - [Contributing](#contributing)
  - [Issues](#issues)
  - [Tests](#tests)
  - [Links](#links)
  ## Installation
   ${response.installation}
  ## Purpose
   ${response.purpose}
  ## License
  ![badge](https://img.shields.io/badge/license-${response.license}-tertiary)
  <br />
  This application is covered by ${response.license} license. 
  ## Contributing
   ${response.contributing}
  ## Issues
 ${response.issues}
  ## Testing
 ${response.testing}
  ## Links
   ${response.links}<br />
  <br />
  :octocat: Find me on GitHub: [${response.username}](https://github.com/${response.username})🧑🏿‍💻<br />
  <br />
   Email me with any questions: ${response.email} `;
}

module.exports = generateMarkdown;
