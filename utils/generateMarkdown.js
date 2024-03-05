//Returnes License Badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Apache 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GNU':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
 
  }
  return badge;
}

// Returns License Link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  let link = '';
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD':
      link = 'https://opensource.org/license/bsd-3-clause';
      break;
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU':
      link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'ISC':
      link = 'https://opensource.org/license/isc-license-txt';
      break;
  }
  return link;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, please contact [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
