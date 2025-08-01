# Test Cases for CCS-9: Sign In with Valid Credentials

## Positive Test Cases

### Test Case 1: Valid Login
- **Precondition**: User is registered and has valid credentials.
- **Steps**:
  1. Navigate to the Sign-In page.
  2. Enter valid email.
  3. Enter correct password.
  4. Click the "Sign In" button.
- **Expected Result**: User is redirected to the dashboard and a welcome message is displayed.

## Negative Test Cases

### Test Case 2: Invalid Email Format
- **Precondition**: Sign-In page is accessible.
- **Steps**:
  1. Enter an incorrectly formatted email.
  2. Enter a valid password.
  3. Attempt to sign in.
- **Expected Result**: Error message indicating invalid email format is displayed.

### Test Case 3: Incorrect Password
- **Precondition**: User account with valid email exists.
- **Steps**:
  1. Enter a valid email.
  2. Enter an incorrect password.
  3. Attempt to sign in.
- **Expected Result**: Error message indicating incorrect credentials is displayed.