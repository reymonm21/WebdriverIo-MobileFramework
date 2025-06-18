import 'dotenv/config';

import { config as sharedConfig } from "./wdio.shared.conf";

//Browserstack credentials
sharedConfig.user = process.env.BROWSERSTACK_USER;
sharedConfig.key = process.env.BROWSERSTACK_KEY;

sharedConfig.specs = [
  './test/specs/ios/*.ts',
];

sharedConfig.capabilities = [
    {
    platformName: 'ios',
    'appium:deviceName': 'iPhone 15 Pro Max',
    'appium:platformVersion': '17',
    'appium:automationName': 'XCUITest',
    'appium:app': 'bs://'
  }
];

sharedConfig.services = ['browserstack'];


export const config = sharedConfig;