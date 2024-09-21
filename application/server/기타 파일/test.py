import requests
import json

# API URL
url = "http://127.0.0.1:8000/recommend/"

# 전달할 JSON 데이터
data = {
    "gender": "female",
    "age": 22,
    "mbti": "ENFP",
    "weather": "sunny_warm",
    "amount": 3
}

# JSON 데이터를 API에 POST 요청으로 전송
response = requests.post(url, json=data)

# 응답 확인
if response.status_code == 200:
    # JSON 응답을 파싱
    response_data = response.json()
    print("받은 JSON 데이터:", json.dumps(response_data, indent=4, ensure_ascii=False))
else:
    print("요청 실패:", response.status_code, response.text)
