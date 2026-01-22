import { test as base } from '@playwright/test';
import { LoginPage } from '@domain/auth/pages/LoginPage';

// 1. Define the type
type MyFixtures = {
    loginPage: LoginPage;
};

// 2. Create the fixture
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // Instantiate the page
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';