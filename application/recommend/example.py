import recommend_DC as r

amount = 3

result = r.recommend("male", 20, "ENTP", "rainy_hot", amount)

for i in range(3):
    DC_num = result[i][0]
    rate = result[i][1]
    print(f"{DC_num}번째 코스의 예상 별점은 {rate}입니다.")