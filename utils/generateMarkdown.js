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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Table of contents
function renderTableOfContents() {}

// Body of readme
function renderBody() {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
