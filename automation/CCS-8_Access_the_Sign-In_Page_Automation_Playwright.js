const { test, expect } = require('@playwright/test');

test.describe('Access the Sign-In Page', () => {
    test('should navigate to the sign-in page successfully', async ({ page }) => {
        // Navigate to the base URL
        await page.goto('http://base.url');

        // Click on the sign-in link
        await page.click('text=Sign In');

        // Expect the sign-in form to be visible
        await expect(page.locator('#sign-in-form')).toBeVisible();
    });

    test('should display an error for an invalid URL', async ({ page }) => {
        // Navigate to an invalid URL
        await page.goto('http://base.url/invalid');

        // Expect an error message
        await expect(page.locator('.error-message')).toHaveText('Page not found');
    });
});