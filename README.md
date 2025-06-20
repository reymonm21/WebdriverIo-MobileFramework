# Mobile Automation Framework with WebdriverIO + Appium

This project is a mobile test automation framework using [WebdriverIO](https://webdriver.io/), [Appium](https://appium.io/) and [BrowserStack](https://www.browserstack.com/) to automate Android and/or iOS applications.

## Tech Stack

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- Node.js
- Mocha 
- Chai 
- Emulator/Browserstack

## 📁 Project Structure
├── app/ #to include files .apk or .app, in the case you want to run the app locally

├── config/ # Config files

├── test/

│ ├── specs/ # Test cases

│ ├── pageobjects/ # Page Object Model files

│ ├── utils/ # Utility functions

│ ├── data/ # Data folder

├── package.json

├── tsconfig.json

└── README.md

## Setup Instructions

### 1. Clone the repo
git clone repo

### 2. Install dependencies
npm install

### 3. Configure your device/emulator and/or your browserstack capabilities

### 4. Run tests
#### Run tests locally 
npm run test:android #tests for Android locally
npm run test:ios #tests for iOS locally
npm run test #tests for Android + iOS locally

#### Run tests in BrowserStack 
npm run test:android:bs #tests for Android using BrowserStack
npm run test:ios:bs #tests for iOS using BrowserStack
npm run test:mobile:bs #tests for Android + iOS using BrowserStack

#### Open Allure report auto-generated 
npm run report:open

## Environment variables (for BrowserStack)
Create a .env file with your BrowserStack credentials:
BROWSERSTACK_USER=your_user
BROWSERSTACK_KEY=your_access_key

## Best Practices
Follow the Page Object Model for better organization and reuse.
Keep selectors dynamic and stable.
Use .env or config files to manage environment variables securely.

## Recursos útiles
- WebdriverIO Docs
- Appium Docs
- BrowserStack Docs

## Contacto
Si tienes preguntas, sugerencias o deseas colaborar, puedes contactarme:

- Email: [rjmm2112@gmail.com]
- GitHub: [@reymonm21]
