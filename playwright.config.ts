import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['allure-playwright']
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
});
