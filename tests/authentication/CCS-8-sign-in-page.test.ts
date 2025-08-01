const { test, expect } = require('@playwright/test');

test('Access the Sign-In Page', async ({ page }) => {
  await page.goto('https://yourapp.com/login');
  await expect(page.locator('text=Sign In')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.locator('text=Forgot Password?')).toBeVisible();
  await expect(page.locator('text=Sign In')).toBeVisible();
});