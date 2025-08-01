import { test, expect } from '@playwright/test';

  test('Check if app link returns 200', async ({ request }) => {
     const response = await request.get('https://practicetestautomation.com/practice-test-login/');
     expect(response.status()).toBe(200);
  });
