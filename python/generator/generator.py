
# return文の後には何も付かないがyieldでは付く。
def countup():
	x = 0
	while True:
		yield x
		x += 1
	

countup()

# yeldはxの値を返している事がわかる。
for i in countup():
	print(i)
	if i == 5:
		break

# 前回の処理途中から開始する。ステートを持つ。（前回の状態を保つ）
for i in countup():
	print(i)
	if i == 10:
		break

# これがフィボナッチで使えるらしい。

# def fibonacci(n):
# 	print('これはfibによる値：{}'.format(n))
# 	if n == 0:
# 		return 0
# 	if n == 1:
# 		return 1
# 	return fibonacci(n-1) + fibonacci(n-2)


def fibonacci():
	a, b = 0, 1
	while 10:
		yield b
		a, b = b, a+b

print(fibonacci())