# Mobile Automation Framework with WebdriverIO + Appium

This project is a mobile test automation framework using [WebdriverIO](https://webdriver.io/) and [Appium](https://appium.io/) to automate Android and/or iOS applications.

## Tech Stack

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- Node.js
- Mocha 
- Chai 
- Emulator

## 📁 Project Structure
├── test/
│ ├── specs/ # Test cases
│ ├── pageobjects/ # Page Object Model files
│ ├── utils/ # Utility functions
│ ├── data/ # Data folder
├── wdio.conf.ts # WDIO config file
├── package.json
├── tsconfig.json
└── README.md

## Setup Instructions

### 1. Clone the repo

### 2. Install dependencies
npm install

### 3. Configure your device/emulator

### 4. Run tests
npx wdio run

## Best Practices
Follow the Page Object Model for better organization and reuse.
Keep selectors dynamic and stable.
Use .env or config files to manage environment variables securely.



