# Authentication Epic Test Cases

## CCS-8: Access the Sign-In Page

### Test Case 1: Load Sign-In Page Successfully
- **Test Steps**:
  1. Navigate to the application's sign-in URL.
- **Expected Result**: The sign-in page should load correctly, displaying all input fields and the sign-in button.

## CCS-9: Sign In with Valid Credentials

### Test Case 1: Successful Log In
- **Test Steps**:
  1. Navigate to the sign-in page.
  2. Enter a valid email address.
  3. Enter a valid password.
  4. Click the 'Sign In' button.
- **Expected Result**: User is redirected to the dashboard page displaying the welcome message.

### Test Case 2: UI Elements on the Sign-In Page
- **Test Steps**:
  1. Navigate to the sign-in page.
  2. Check for the presence of email and password input fields.
  3. Ensure 'Sign In' button is available.
- **Expected Result**: All specified UI elements should be present and visible on the page.

### Test Case 3: Remember Me Functionality
- **Test Steps**:
  1. Navigate to the sign-in page.
  2. Check the 'Remember Me' checkbox.
  3. Enter valid credentials and sign in.
  4. Log out and navigate back to the sign-in page.
- **Expected Result**: The email field should retain the user's email if 'Remember Me' was checked.

## CCS-10: Forgot Password Link

### Test Case 1: Reset Password Link
- **Test Steps**:
  1. Navigate to the sign-in page.
  2. Click on the 'Forgot Password?' link.
  3. Enter the registered email address.
  4. Click the 'Submit' button.
- **Expected Result**: A confirmation message indicating that a password reset link has been sent to the registered email address.