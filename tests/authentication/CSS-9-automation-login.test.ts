import { Builder, By, until } from 'selenium-webdriver';
import 'chromedriver';

describe('CSS-9: Sign In with Valid Credentials Automation Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://practicetestautomation.com/practice-test-login/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Successful Sign-In with Valid Credentials', async () => {
        // Locate and fill the username
        await driver.findElement(By.css('#username')).sendKeys('validUser');

        // Locate and fill the password
        await driver.findElement(By.css('#password')).sendKeys('validPassword');

        // Locate and click the submit button
        await driver.findElement(By.css('#submit')).click();

        // Wait until redirected to the dashboard
        await driver.wait(until.urlContains('/dashboard'), 10000);

        // Verify presence of session token (pseudo-code)
        const cookies = await driver.manage().getCookies();
        const authToken = cookies.find(cookie => cookie.name === 'auth_token');
        expect(authToken).toBeDefined();
    });

    test('UI Elements Presence', async () => {
        // Verify the username field is present
        const usernameField = await driver.findElement(By.css('#username'));
        expect(usernameField).not.toBeNull();

        // Verify the password field is present
        const passwordField = await driver.findElement(By.css('#password'));
        expect(passwordField).not.toBeNull();

        // Verify the submit button is present
        const submitButton = await driver.findElement(By.css('#submit'));
        expect(submitButton).not.toBeNull();
    });
});