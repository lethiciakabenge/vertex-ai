import { test, expect } from '@playwright/test';

test('CCS-9: Sign In with Valid Credentials', async ({ page }) => {
  // Go to the sign-in page
  await page.goto('https://example.com/signin');

  // Enter valid user credentials
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'securePassword123');

  // Click the sign-in button
  await page.click('#signin-button');

  // Check that the user is redirected to the dashboard page
  await expect(page).toHaveURL('https://example.com/dashboard');

  // Verify that the sign-out button is visible after signing in
  await expect(page.locator('#signout-button')).toBeVisible();
});