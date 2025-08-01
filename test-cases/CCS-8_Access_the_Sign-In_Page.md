# Test Cases for CCS-8: Access the Sign-In Page

## Test Case 1: Load Sign-In Page
- **Objective**: Ensure the sign-in page loads successfully with HTTP status 200.
- **Precondition**: The server is running.
- **Steps**:
  1. Navigate to the sign-in page URL.
- **Expected Result**: The page loads with HTTP status 200.

## Test Case 2: Verify UI Elements
- **Objective**: Verify the presence of all required UI elements on the sign-in page.
- **Precondition**: The sign-in page is loaded.
- **Steps**:
  1. Check for the email input field.
  2. Check for the password input field.
  3. Check for the "Sign In" button.
  4. Check for the "Forgot Password?" link.
- **Expected Result**: All elements are present and correctly displayed.

## Test Case 3: Negative Test - Invalid URL
- **Objective**: Test how the application responds when an invalid URL is accessed.
- **Precondition**: The server is running.
- **Steps**:
  1. Navigate to a non-existent URL on the application.
- **Expected Result**: The user receives a 404 error page.

## Test Case 4: Negative Test - HTTP Request Failure
- **Objective**: Simulate an HTTP request failure and verify appropriate error handling.
- **Precondition**: Disconnect the network.
- **Steps**:
  1. Attempt to navigate to the sign-in page.
- **Expected Result**: The application shows a "No Internet Connection" message or similar.