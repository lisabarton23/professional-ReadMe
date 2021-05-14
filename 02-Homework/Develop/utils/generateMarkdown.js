// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {//ifelse statement 
return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}

##Table of Contents (Optional)


## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}
##License
${renderLicenseLink(data.license)}

##Tests
${data.tests}


##Questions
Please contact me at ${data.questions} if you have any questions about my project.
Also please visit my GitHub to see more projects i have worked on at ${data.github}.

Optional
## Badges

## Features

## How to Contribute


`;
}

module.exports = generateMarkdown;
