// Test Case: Access the Sign-In Page
// Description: As a user, I want to navigate to the sign-in page so I can enter my login credentials.

describe('Access the Sign-In Page', () => {
    it('should load the sign-in page successfully', async () => {
        await page.goto('http://your-app-url.com/signin'); // Replace with actual sign-in URL
        const response = await page.waitForResponse(response => response.status() === 200);
        expect(response.ok()).toBeTruthy();
    });

    it('should contain email input field', async () => {
        const emailInput = await page.$('input[type="email"]');
        expect(emailInput).not.toBeNull();
    });

    it('should contain password input field', async () => {
        const passwordInput = await page.$('input[type="password"]');
        expect(passwordInput).not.toBeNull();
    });

    it('should contain a Sign In button', async () => {
        const signInButton = await page.$('button#signIn'); // Use the correct selector for the Sign In button
        expect(signInButton).not.toBeNull();
    });

    it('should contain a Forgot Password? link', async () => {
        const forgotPasswordLink = await page.$('a#forgotPassword'); // Use the correct selector for the Forgot Password link
        expect(forgotPasswordLink).not.toBeNull();
    });
});