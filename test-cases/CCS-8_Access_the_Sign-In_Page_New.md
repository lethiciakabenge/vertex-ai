# Test Cases for CCS-8: Access the Sign-In Page

## Test Case 1: Load Sign-In Page
- **Description**: Verify that the sign-in page loads successfully.
- **Precondition**: None
- **Steps**:
  1. Open a web browser.
  2. Navigate to the sign-in page URL: [https://practicetestautomation.com/practice-test-login](https://practicetestautomation.com/practice-test-login)
- **Expected Result**: The page loads successfully with HTTP status 200.

## Test Case 2: Verify UI Elements
- **Description**: Verify all required UI elements are present on the sign-in page.
- **Precondition**: The sign-in page is loaded.
- **Steps**:
  1. Check for the presence of an email input field.
  2. Check for the presence of a password input field.
  3. Check for the presence of a "Sign In" button.
  4. Check for the presence of a "Forgot Password?" link.
- **Expected Result**: All UI elements are present as specified.

## Test Case 3: Negative Test - Invalid URL
- **Description**: Verify the user receives an error message when trying to access an invalid URL.
- **Precondition**: None
- **Steps**:
  1. Open a web browser.
  2. Navigate to an invalid URL: [https://practicetestautomation.com/invalid-url](https://practicetestautomation.com/invalid-url)
- **Expected Result**: The user receives a 404 error or a relevant error message.

## Test Case 4: Negative Test - HTTP Request Failure
- **Description**: Simulate an HTTP request failure and verify error handling.
- **Precondition**: None
- **Steps**:
  1. Disconnect the network.
  2. Attempt to navigate to the sign-in page URL.
- **Expected Result**: The browser displays a network error message indicating the page cannot be reached.