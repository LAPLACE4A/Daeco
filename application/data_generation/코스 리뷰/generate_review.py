import csv, random

valid_weather = ["sunny_hot", "sunny_warm", "sunny_cool", "sunny_cold",
                 "cloudy_hot", "cloudy_warm", "cloudy_cool", "cloudy_cold",
                 "rainy_hot", "rainy_warm", "rainy_cool", "rainy_cold",
                 "snowy_cold"]

valid_hashtag = ["오운완", "식폭행", "소확행", "데이트", "친구", 
                 "썸", "단체", "이색", "JMT", "힐링",
                 "가성비", "인생샷", "낭만", "추억", "텅장", "자연"]

file_path = "review.csv"

class Person:
    def __init__(self, type, age, mbti):
        self.type = type
        self.age = age
        self.mbti = mbti
    
    def display(self):
        print(f"gender : {self.type}")
        print(f"age : {self.age}")
        print(f"mbti : {self.mbti}")

class Couple:
    def __init__(self):
        # 나이 설정
        central_age = random.randint(15, 25)
        age = []
        
        value = random.randint(1, 100)
        
        if value < 80:
            age = [central_age, central_age]
        else:
            age = [central_age+random.randint(-2, 2), central_age+random.randint(-2, 2)]

        # mbti 설정
        mbti = ['', '']

        for i in range(2):
            mbti[i] += random.choice(['I', 'E'])
            mbti[i] += random.choice(['S', 'N'])
            mbti[i] += random.choice(['T', 'F'])
            mbti[i] += random.choice(['J', 'P'])

        value = random.randint(1, 3)
        
        self.first = Person(random.choice(["male", "female"]), age[0], mbti[0])
        self.second = Person(random.choice(["male", "female"]), age[1], mbti[1])

    def display(self):
        print("-"*10 + "first" + "-"*10)
        self.first.display()
        print("-"*10 + "second" + "-"*10)
        self.second.display()
        print("-"*20)

def get_lastId():
    with open(file_path, mode='r', encoding='utf-8') as f:
        csv_reader = csv.reader(f)
        
        rows = list(csv_reader)
        
        return int(rows[-1][0])

def add_csv(contents):
    with open(file_path, mode='a', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(contents)

def list2str(l):
    result = "["
    for obj in l:
        result += f"{obj}, "
    result = result[:-2]
    result += "]"

    return result

def valid_ht(ht):
    valid = True
    for h in ht:
        if not h in valid_hashtag:
            valid = False
            break
    return valid

def main():
    c = Couple()

    while True:
        print("당신은 이들입니다: ")
        c.display()

        dc_num = random.randint(1, 20)
        print(f"당신이 이용한 코스는 {dc_num}입니다.")

        weather = valid_weather[random.randint(0, len(valid_weather)-1)]
        print(f"오늘의 날씨는 {weather}입니다.")

        print(f"id: {get_lastId()+1}인 평가를 작성하세요.")

        print()

        stars = float(input("당신의 별점은? "))

        hashtag = ["df"]
        while (not valid_ht(hashtag)):
            hashtag = input("해시태그를 입력하세요: ").strip().split(" ")
        
        content = input("평가글을 입력하세요: ")

        # result list 만들기
        result_list = []
        result_list.append(get_lastId()+1)
        result_list.append(dc_num)
        result_list.append(stars)
        result_list.append(list2str(hashtag))
        result_list.append(content)
        result_list.append(weather)
        result_list.append(c.first.type)
        result_list.append(c.first.age)
        result_list.append(c.first.mbti)
        result_list.append(c.second.type)
        result_list.append(c.second.age)
        result_list.append(c.second.mbti)

        
        add_csv(result_list)

        if (input("이용자를 바꾸겠습니까? ") == 'y'):
            c = Couple()

        for i in range(3):
            print("*"*30)

main()
        
