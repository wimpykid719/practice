import math

month = 30.4375
year = 365.25

b_year = 2000
#四捨五入
b_month = 12
b_day = 17

n_year = 2014
n_month = 10
n_day = 24

def custom_round(number, ndigits=0):
    if type(number) == int:#整数ならそのまま返す
        return number
    d_point = len(str(number).split('.')[1])#小数点以下が何桁あるか定義
    if ndigits >= d_point:#求める小数点以下の値が引数より大きい場合はそのまま返す
        return number
    c = (10 ** d_point) * 2
    #小数点以下の桁数分元の数に0を足して整数にして2倍するための値(0.01ならcは200)
    return round((number * c + 1) / c, ndigits)
    #元の数に0を足して整数にして2倍して1を足して2で割る。元の数が0.01なら0.015にしてroundを行う

# p_year = n_year - b_year
# p_month = n_month - b_month
# p_day = n_day - b_day
# if p_month < 0:
# 	p_year = p_year - 1
# 	p_month = p_month * -1

# if p_day < 0:
# 	p_day = p_day * -1

year_to_day1 = b_year * year
month_to_day1 = b_month * month

year_to_day2 = n_year * year
month_to_day2 = n_month * month

dayb = year_to_day1 + month_to_day1 + b_day
dayn = year_to_day2 + month_to_day2 + n_day

day = dayn - dayb

p_year = math.floor(day / year)

monthb = day % year

p_month = math.floor(monthb / month)
p_day = p_month % monthb

if p_day > 15:
	p_month = p_month + 1

print(p_year, p_month)


# print(p_year, p_month, p_day)

