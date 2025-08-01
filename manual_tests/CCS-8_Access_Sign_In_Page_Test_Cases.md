# Manual Test Cases for CCS-8: Access the Sign-In Page

## Test Case 1: Access the Sign-In Page - Positive Scenario

**Test Case ID**: CCS-8-TC01  
**Title**: Verify that a user can successfully access the sign-in page.  
**Precondition**: The user is on the homepage.  
**Steps**:
1. Navigate to the homepage.
2. Click on the "Sign In" link/button.

**Expected Result**:  
- The user is redirected to the sign-in page.
- The sign-in page is displayed with fields to enter an email and password.
- No error message is shown.

---

## Test Case 2: Access the Sign-In Page - Negative Scenario

**Test Case ID**: CCS-8-TC02  
**Title**: Verify that the sign-in page displays an error if there is a server issue.  
**Precondition**: The user is on the homepage. The server is intentionally disconnected for testing purposes.  
**Steps**:
1. Navigate to the homepage.
2. Click on the "Sign In" link/button.

**Expected Result**:  
- An error message indicating a server issue is displayed.
- The user is not able to access the sign-in page.
- The error message suggests trying again later or contacting support.