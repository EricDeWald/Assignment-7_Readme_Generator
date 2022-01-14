// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license){
    if (license == "NONE" )return ""

    if (license == "Appache 2.0" ) return '![](https://img.shields.io/aur/license/android-studio)'

    if (license == "GPL 3.0" )return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)"

    if (license == "MIT" )return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

    if (license == "NONE" ){ return""}

    if (license == "Appache 2.0" ){ return "(https://opensource.org/licenses/Apache-2.0)"}

    if (license == "GPL 3.0" ){ return "(https://www.gnu.org/licenses/agpl-3.0)"}

    if (license == "MIT" ){ return "(https://opensource.org/licenses/MIT)"}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(gMDrenderLicenseData){
    if (gMDrenderLicenseData === "NONE")return ""
    return`## License

This project is covered under ${gMDrenderLicenseData}.`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
return `# ${data.pTitle}

${renderLicenseBadge(data.license)}

## Description

${data.pDescription}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.pInstallInstructions}

## Usage

${data.pUsageInfo}

${renderLicenseSection(data.license)}

## How to Contribute

${data.pContribution}

## Tests

${data.pTestInstructions} 
}

## Questions

If you have any questions contact me at: ${data.p}
`
module.exports = generateMarkdown;
