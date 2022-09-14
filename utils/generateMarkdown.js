// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    switch (license) {
      case 'Apache 2.0':
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      case 'BSD 3':
        return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      case 'GPL':
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      case 'LGPL':
        return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Mozilla Public License 2.0':
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      case 'ISC':
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    };
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    switch (license) {
      case 'Apache 2.0':
        return `  [Click Here to View the License Statement](https://opensource.org/licenses/Apache-2.0)<br>`;
      case 'BSD 3':
        return `  [Click Here to View the License Statement](https://opensource.org/licenses/BSD-3-Clause)<br>`;
      case 'GPL':
        return `  [Click Here to View the License Statement](https://opensource.org/licenses/GPL-3.0)<br>`;
      case 'LGPL':
        return `  [Click Here to View the License Statement](https://opensource.org/licenses/LGPL-3.0)<br>`;
      case 'MIT':
        return '  [Click Here to View the License Statement](https://opensource.org/licenses/MIT)<br>';
      case 'Mozilla Public License 2.0':
        return '  [Click Here to View the License Statement](https://opensource.org/licenses/MPL-2.0)<br>';
      case 'ISC':
        return '  [Click Here to View the License Statement](https://opensource.org/licenses/ISC)<br>';
    };
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## LICENSE 
  This application is covered under License ${license}.<br>`;
  }
};

// Table of contents
function renderTableOfContents(data) {
  let contentsArr = Object.keys(data).filter(section => !section.startsWith('confirm'));
  contentsArr = contentsArr.slice(1, contentsArr.length-2);
  const content = contentsArr.map(section => {
    return `-[${section.toUpperCase()}](#${section})<br>`
  })
  return `
  ## TABLE OF CONTENTS\n
  ${content.join("")}
  [QUESTIONS](#questions)
  `;
}

// Body of readme
function renderBody(othersArr, name) {
  if (!othersArr[name]) {
    return '';
  } else {
    return `## ${name.toUpperCase()}
    ${othersArr[name]}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
