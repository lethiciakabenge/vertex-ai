import { test, expect } from '@playwright/test';

// Automated tests for the Sign-In page

test.describe('Sign-In Page', () => {
  
  test('Load Sign-In Page', async ({ page }) => {
    await page.goto('http://localhost:5000'); // Adjust the port as necessary
    await expect(page).toHaveTitle(/Sign In/);
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('Verify UI Elements', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Sign In');
  });

  test('Successful Sign-In', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Sign in successful!')).toBeVisible();
  });

  test('Failed Sign-In (Invalid Credentials)', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('input[type="email"]', 'wrong@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Invalid email or password.')).toBeVisible();
  });

});
