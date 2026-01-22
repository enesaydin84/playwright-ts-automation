import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load the correct ENV file based on process.env.ENV (defaults to 'local')
const envName = process.env.ENV || 'local';
dotenv.config({ path: path.resolve(__dirname, 'config', 'env', `.env.${envName}`) });

export default defineConfig({
  testDir: './tests', // Points to your new tests folder
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [['html'], ['list']],
  
  use: {
    baseURL: process.env.BASE_URL, // Read from loaded .env
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});