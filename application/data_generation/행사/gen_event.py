import json

file_path = "event.json"
# JSON 파일 읽기
def read_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return data
    except json.JSONDecodeError as e:
        print(f"JSONDecodeError: {e}")
    except FileNotFoundError:
        print("파일을 찾을 수 없습니다.")
    except Exception as e:
        print(f"오류 발생: {e}")

# JSON 파일 쓰기
def write_json(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def main():
    while True:
        data = read_json(file_path)

        new_data = {}

        new_data["id"] = len(data)+1

        new_data["name"] = input("행사 이름: ")

        new_data["position"] = input("행사 장소: ")

        new_data["period"] = input("행사 기간: ").strip().split(" ")

        new_data["content"] = input("상세 정보: ")

        if (input("제대로 입력했나요? ") == 'y'):
            data.append(new_data)
            write_json(file_path, data)
        
        print("-"*20)

main()
