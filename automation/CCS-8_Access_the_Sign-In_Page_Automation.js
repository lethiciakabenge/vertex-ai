// Test Automation for CCS-8: Access the Sign-In Page

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function accessSignInPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Positive Test: Access the Sign-In Page
        await driver.get('https://example.com/signin');
        let signInElement = await driver.wait(until.elementLocated(By.id('signin-form')), 10000);
        let title = await driver.getTitle();
        assert.strictEqual(title, 'Sign In - Example');

        // Negative Test 1: Access non-existing page
        await driver.get('https://example.com/non-existing-page');
        let errorElement = await driver.wait(until.elementLocated(By.id('error-404')), 10000);
        assert.strictEqual(await errorElement.getText(), '404 Error: Page not found');

        // Negative Test 2: Access the Sign-In Page with incorrect URL
        await driver.get('https://malicious-example.com/signin');
        let securityWarning = await driver.wait(until.elementLocated(By.id('security-warning')), 10000);
        assert.strictEqual(await securityWarning.getText(), 'Security Warning: This is not the legitimate site');

    } finally {
        await driver.quit();
    }
})();
