import { test, expect } from '@core/fixtures/testFixtures';

test.describe('Authentication', () => {
    
    test('should login successfully with valid credentials', async ({ loginPage, page }) => {
        // 1. Go to the site
        await loginPage.goto();

        // 2. Perform Login (Standard demo credentials)
        await loginPage.login('standard_user', 'secret_sauce');

        // 3. Verify we are redirected to inventory page
        await expect(page).toHaveURL(/.*inventory.html/);
        
        // 4. Verify a visible element on the new page
        await expect(page.locator('.title')).toHaveText('Products');
    });

});