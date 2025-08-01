import requests

def test_login_avoid_400_response():
    url = 'https://practicetestautomation.com/practice-test-login/'
    response = requests.get(url)
    # Check if the status code is not 400
    assert response.status_code != 400, f"Expected status code not to be 400, but got {response.status_code}"

if __name__ == "__main__":
    test_login_avoid_400_response()