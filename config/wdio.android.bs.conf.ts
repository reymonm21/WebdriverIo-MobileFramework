import 'dotenv/config';

import { config as sharedConfig } from "./wdio.shared.conf";

//Browserstack credentials
sharedConfig.user = process.env.BROWSERSTACK_USER;
sharedConfig.key = process.env.BROWSERSTACK_KEY;

sharedConfig.specs = [
  './test/specs/android/*.ts',
];

sharedConfig.capabilities = [
    {
    platformName: 'android',
    'appium:deviceName': 'Samsung Galaxy S22 Ultra',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://',
    'appium:autoGrantPermissions': true
  }
];

sharedConfig.services = ['browserstack'];


export const config = sharedConfig;