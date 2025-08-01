# CCS-9 Sign In with Valid Credentials - Test Cases

### Description
These test cases focus on verifying the functionality of signing in with valid credentials.

### Goal
Ensure that users can successfully sign in using valid email and password credentials and that all associated features are working correctly.

## Test Cases

### Test Case 1: Successful Log In
- **Description**: Ensure that users can log in with valid credentials.
- **Test Steps**:
  1. Navigate to the login page.
  2. Enter a valid email address.
  3. Enter a valid password.
  4. Click the 'Sign In' button.
- **Expected Result**: User is redirected to the dashboard page with a welcome message displayed.

### Test Case 2: Check UI Elements
- **Description**: Verify all essential UI elements are present on the login page.
- **Test Steps**:
  1. Navigate to the login page.
  2. Verify the presence of the email input field.
  3. Verify the presence of the password input field.
  4. Ensure the 'Sign In' button is visible.
- **Expected Result**: All UI elements should be present and visible.

### Test Case 3: Remember Me Functionality
- **Description**: Validate the functionality of the 'Remember Me' option.
- **Test Steps**:
  1. Navigate to the login page.
  2. Check the 'Remember Me' checkbox.
  3. Sign in with valid credentials.
  4. Log out and return to the login page.
- **Expected Result**: The email field retains the user's email if 'Remember Me' was checked.