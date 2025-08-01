# Test Cases for CCS-8: Access the Sign-In Page

## Test Case 1: Valid Sign-In Page Access
- **Description**: Verify that the sign-in page loads successfully with all necessary elements.
- **Preconditions**: None
- **Test Steps**:
  1. Navigate to the URL: `https://practicetestautomation.com/practice-test-login`
  2. Observe the page loading behavior.
- **Expected Result**:
  - The page loads successfully with a **200 OK** response.
  - The page contains input fields for "Email" and "Password".
  - The page includes a "Sign In" button and a "Forgot Password?" link.

## Negative Test Case 1: Check Invalid URL Access
- **Description**: Verify the page's behavior when an incorrect URL is accessed.
- **Preconditions**: None
- **Test Steps**:
  1. Navigate to an incorrect URL, e.g., `https://practicetestautomation.com/invalid-login`
- **Expected Result**:
  - The page should return a **404 Not Found** error or redirect to a custom error page.

## Negative Test Case 2: Check Access Without Network
- **Description**: Verify the behavior when the network is not available, and the URL is accessed.
- **Preconditions**: Disable internet connection
- **Test Steps**:
  1. Without internet connection, attempt to navigate to the URL: `https://practicetestautomation.com/practice-test-login`
- **Expected Result**:
  - An error message indicating no network access should be displayed.

## Negative Test Case 3: Check Secure Connection Requirement
- **Description**: Verify that the sign-in page requires a secure HTTPS connection.
- **Preconditions**: None
- **Test Steps**:
  1. Attempt to navigate using HTTP: `http://practicetestautomation.com/practice-test-login`
- **Expected Result**:
  - The browser should automatically redirect to the HTTPS version of the page.
