import * as path from 'path';

import { config as sharedConfig } from "./wdio.shared.conf";

sharedConfig.port = 4723;

sharedConfig.specs = [
    '../test/specs/android/*.ts'
];

sharedConfig.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': 'Pixel 9 Pro XL',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), ''),
    'appium:autoGrantPermissions': true
  },
];

sharedConfig.services = ['appium'];

export const config = sharedConfig;