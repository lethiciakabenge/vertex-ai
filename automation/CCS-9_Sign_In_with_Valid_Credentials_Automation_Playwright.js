const { test, expect } = require('@playwright/test');

test.describe('Sign In with Valid Credentials', () => {
  test('should navigate to the login page and successfully login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login');
    
    // Enter valid credentials
    await page.fill('#username', 'validUsername');
    await page.fill('#password', 'validPassword');
    
    // Click the sign-in button
    await page.click('#sign-in-button');
    
    // Assertion to check if login was successful
    await expect(page).toHaveURL('https://practicetestautomation.com/dashboard');
    await expect(page.locator('.welcome-message')).toContainText('Welcome validUsername');
  });

  test('should not log in with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login');
    
    // Enter invalid credentials
    await page.fill('#username', 'invalidUsername');
    await page.fill('#password', 'invalidPassword');
    
    // Click the sign-in button
    await page.click('#sign-in-button');
    
    // Assertion to check if error message is displayed
    await expect(page.locator('.error-message')).toContainText('Invalid username or password');
  });
});