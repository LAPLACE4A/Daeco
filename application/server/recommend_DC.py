import keras, numpy
from keras.models import load_model

mbti2list = {"ISTJ":[-1, 4], "ISTP":[3, -1],
            "ISFJ":[-5, -2], "ISFP":[-3, -1],
            "INTJ":[4, 5], "INTP":[-2, 5],
            "INFJ":[0, 5], "INFP":[0, 0],
            "ESTJ":[4, 1], "ESTP":[5, 5],
            "ESFJ":[-1, -2], "ESFP":[-4, -5],
            "ENTJ":[4, 4], "ENTP":[3, 4],
            "ENFJ":[-3, 3], "ENFP":[-4, 1]}

weather2list = {"sunny_hot":[3, -1], "sunny_warm":[3, 1], "sunny_cool":[3, 1], "sunny_cold":[3, -1],
                 "cloudy_hot":[1, -1], "cloudy_warm":[1, 1], "cloudy_cool":[1, 1], "cloudy_cold":[1, -1],
                 "rainy_hot":[-3, -1], "rainy_warm":[-3, 1], "rainy_cool":[-3, 1], "rainy_cold":[-3, -1],
                 "snowy_cold":[-2, -1]}

gender2value = {"male":-1, "female":1}


def recommend(gender, age, mbti, weather, num):
    input_data = []
    input_data.append(gender2value[gender])
    input_data.append(age/15 -1)
    
    mbti_list = mbti2list[mbti]
    mbti_list[0] /= 10
    mbti_list[1] /= 10
    input_data += mbti_list

    weather_list = weather2list[weather]
    weather_list[0] /= 6
    weather_list[1] /= 6
    input_data += weather_list

    input_data = numpy.array(input_data).reshape(1, -1)
    # ai part
    model = load_model("first.keras")

    prediction = model.predict(input_data)

    prediction = list(prediction[0]*5)

    result_dict = {}
    for i in range(1, 21):
        result_dict[i] = prediction[i-1]
    sorted_items = sorted(result_dict.items(), key= lambda item:item[1], reverse=True)

    return sorted_items[:num]


def test():
    print(recommend("female", 22, "ENFP", "sunny_warm", 3))

if __name__ == "__main__":
    test()