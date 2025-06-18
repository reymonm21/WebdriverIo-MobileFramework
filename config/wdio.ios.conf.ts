import * as path from 'path';

import { config as sharedConfig } from "./wdio.shared.conf";


sharedConfig.port = 4723;

sharedConfig.specs = [
  './test/specs/ios/*.ts'
];

sharedConfig.capabilities = [
  {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 16 Pro Max',
    'appium:platformVersion': '18.1',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), '')
  },
];

sharedConfig.services = ['appium'];

export const config = sharedConfig;