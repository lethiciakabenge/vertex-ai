import { test, expect } from '@playwright/test';

test.describe('Sign In with Valid Credentials', () => {
  test('should successfully sign in with valid email and password', async ({ page }) => {
    // Navigate to the sign-in page
    await page.goto('https://example.com/login');

    // Enter valid credentials
    await page.fill('#email', 'valid.user@example.com');
    await page.fill('#password', 'validPassword123');

    // Submit the sign-in form
    await page.click('button[type="submit"]');

    // Expect to be redirected to the homepage/dashboard after successful sign in
    await expect(page).toHaveURL('https://example.com/dashboard');
    await expect(page.locator('text=Welcome, Valid User')).toBeVisible();
  });

  test('should display error with invalid email', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#email', 'invalid.email@example.com');
    await page.fill('#password', 'validPassword123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toContainText('Invalid email or password');
  });

  test('should display error with invalid password', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#email', 'valid.user@example.com');
    await page.fill('#password', 'invalidPassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toContainText('Invalid email or password');
  });
});
