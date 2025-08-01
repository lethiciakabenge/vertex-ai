// Playwright script for test automation of CCS-9 "Sign In with Valid Credentials"

import { test, expect } from '@playwright/test';

test.describe('Sign In', () => {
  test('Successful Log In', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#email', 'valid-email@example.com');
    await page.fill('#password', 'valid-password');
    await page.click('#signInButton');
    await expect(page.url()).toBe('https://example.com/dashboard');
  });
  
  test('UI Elements Presence', async ({ page }) => {
    await page.goto('https://example.com/login');
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#signInButton')).toBeVisible();
  });
  
  test('Remember Me Functionality', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.check('#rememberMe');
    await page.fill('#email', 'user@example.com');
    await page.fill('#password', 'password');
    await page.click('#signInButton');
    // Assume there's a logout function
    await page.click('#logout');
    await page.goto('https://example.com/login');
    await expect(page.locator('#email')).toHaveValue('user@example.com');
  });
});