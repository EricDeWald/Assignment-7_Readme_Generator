// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license){
    var lBadge =""
    if (license == "NONE" ){ return lBadge =""}

    if (license == "Appache 2.0" ){ return lBadge =""}

    if (license == "GPL 3.0" ){ return lBadge =""}

    if (license == "MIT" ){ return lBadge =""}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    var lLink =""

    if (license == "NONE" ){ return lLink =""}

    if (license == "Appache 2.0" ){ return lLink =""}

    if (license == "GPL 3.0" ){ return lLink =""}

    if (license == "MIT" ){ return lLink =""}
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
