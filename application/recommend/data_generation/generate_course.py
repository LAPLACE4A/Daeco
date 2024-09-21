import csv, random

last_id = None
file_path = "course.csv"
valid_weather = ["sunny_hot", "sunny_warm", "sunny_cool", "sunny_cold",
                 "cloudy_hot", "cloudy_warm", "cloudy_cool", "cloudy_cold",
                 "rainy_hot", "rainy_warm", "rainy_cool", "rainy_cold",
                 "snowy_cold"]
valid_concept = ["activity", "indoor", "experience", "healing", "culture", "food", "photo", "shopping"]
valid_identifier = ["main", "sub"]

def main():
    global last_id

    while True:
        if not last_id:
            last_id = get_lastId()
        
        course_title = input("id: " + str(last_id+1) + "인 코스의 이름은? ")
        
        course_concept = None
        while not (course_concept in valid_concept):
            course_concept = input("해당 코스의 컨셉은? ")
            if not (course_concept in valid_concept):
                print("유효하지 않은 컨셉입니다.")

        print("-"*20)

        course_timeList = []
        course_placeList = []
        course_idList = []

        while True:
            print(f"{len(course_timeList)} 이벤트 입력화면입니다!")
            start_time = input("이벤트의 시작시간은? ")
            end_time = input("이벤트의 마침시간은? ")
            place = input("이벤트의 장소는? ")

            identifier = None
            while not (identifier in valid_identifier):
                identifier = input("이벤트의 분류는? ")
                if not (identifier in valid_identifier):
                    print("유효하지 않은 분류입니다.")
            
            if (input("문제없이 입력했나요? (y / n) ") == "y"):
                course_timeList.append((start_time, end_time))
                course_placeList.append(place)
                course_idList.append(identifier)
            
            if (input("이벤트가 더 있나요? ") == "n"):
                break
            
            print("-"*20)


        # 출력 만들기!
        result_list = []

        result_list.append(str(last_id+1))

        result_list.append(course_title)

        result_list.append(time2str(course_timeList))

        result_list.append(list2str(course_placeList))

        result_list.append(list2str(course_idList))

        result_list.append(course_concept)

        add_csv(result_list)
        #print(result_list)

        print("코스 저장 완료!")

        print("*"*20)

        last_id += 1


def get_lastId():
    with open(file_path, mode='r', encoding='utf-8') as f:
        csv_reader = csv.reader(f)
        
        rows = list(csv_reader)
        
        return int(rows[-1][0])

def add_csv(contents):
    with open(file_path, mode='a', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(contents)

def time2str(timeList):
    final_result = "["

    for t in timeList:
        sub_result = f"[{t[0]}, {t[1]}], "
        final_result += sub_result
    
    final_result = final_result[:-2]
    final_result += "]"

    return final_result

def list2str(l):
    result = "["
    for obj in l:
        result += f"{obj}, "
    result = result[:-2]
    result += "]"

    return result

main()
