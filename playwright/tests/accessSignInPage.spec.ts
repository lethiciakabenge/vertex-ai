import { test, expect } from '@playwright/test';

test.describe('CCS-8: Access Sign-In Page', () => {

  // Positive Test Case
  test('User can access the sign-in page successfully', async ({ page }) => {
    await page.goto('https://yourwebsite.com'); // Replace with actual URL
    await page.click('text=Sign In'); // Replace with the actual text or selector

    const isSignInPageDisplayed = await page.isVisible('input[name="email"]'); // Check for sign-in fields
    expect(isSignInPageDisplayed).toBeTruthy();
    
    const isPasswordInputDisplayed = await page.isVisible('input[name="password"]');
    expect(isPasswordInputDisplayed).toBeTruthy();
  });

  // Negative Test Case
  test('Server error is shown when accessing sign-in page fails', async ({ page }) => {
    await page.goto('https://yourwebsite.com'); // Replace with actual URL
    // Simulate server error here, if possible

    await page.click('text=Sign In'); // Replace with the actual text or selector

    const isErrorVisible = await page.isVisible('text=Server issue. Please try again later.'); // Replace with your error message
    expect(isErrorVisible).toBeTruthy();
  });

});
