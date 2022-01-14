// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license){
    var lBadge =""
    if (license == "NONE" ){ return lBadge =""}

    if (license == "Appache 2.0" ){ return lBadge ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}

    if (license == "GPL 3.0" ){ return lBadge ="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"}

    if (license == "MIT" ){ return lBadge ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    var lLink =""

    if (license == "NONE" ){ return lLink =""}

    if (license == "Appache 2.0" ){ return lLink ="## License     (https://opensource.org/licenses/Apache-2.0)"}

    if (license == "GPL 3.0" ){ return lLink ="(https://www.gnu.org/licenses/agpl-3.0)"}

    if (license == "MIT" ){ return lLink ="(https://opensource.org/licenses/MIT)"}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    lSection = ""
    if (license == "NONE" ){ return ""}

    if (license == "Appache 2.0" ){ return ""}

    if (license == "GPL 3.0" ){ return ""}

    if (license == "MIT" ){ return ""}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
    renderLicenseSection(license)
    renderLicenseLink(license)
    renderLicenseBadge(license)
`#${pTitle}

## Description

${pDescription}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${pInstallInstructions}

## Usage

${pUsageInfo}


## License

${pLicense}

## Badges

${pBadges}

## How to Contribute

${pContribution}

## Tests

${pTestInstructions} `


}

module.exports = generateMarkdown;
