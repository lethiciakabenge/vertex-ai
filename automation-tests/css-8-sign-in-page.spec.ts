import { test, expect } from '@playwright/test';

test.describe('Sign-In Page', () => {
    test('Access the Sign-In Page', async ({ page }) => {
        // Navigate to the sign-in page
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        // Check if the page loads successfully
        await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

        // Verify email input field
        const emailInput = await page.$('input[name="username"]');
        expect(emailInput).not.toBeNull();

        // Verify password input field
        const passwordInput = await page.$('input[name="password"]');
        expect(passwordInput).not.toBeNull();

        // Verify sign in button
        const signInButton = await page.$('button[type="submit"]');
        expect(signInButton).not.toBeNull();

        // Verify forgot password link
        const forgotPasswordLink = await page.$('text="Forgot your password?"');
        expect(forgotPasswordLink).not.toBeNull();
    });
});