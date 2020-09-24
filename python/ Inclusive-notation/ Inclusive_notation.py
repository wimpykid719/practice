extension_1 = []
for i in range(10):
	extension_1.append(i)

print(extension_1)

# 上記を内包表記にすると
# 最初のiはリストに代入する物になる。
# 内包表記の方が速度がでる。appendメソッドの呼び出しでオーバヘッドが起こり動作が遅くなる。
comprehension_1= [i for i in range(10)]
comprehension_1

extension_2 =[]
for i in range(10):
	if i%2==0:
		extension_2.append(i)
extension_2

# if文は後ろに持っていく前にくる場合もある
comprehension_2 = [i for i in range(10) if i%2==0]
comprehension_2