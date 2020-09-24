# l = [1, 2, 3]
# i = iter(l)
# next(i)
# print(i)

# next(i)
# print(i)


# i = iter([1, 2, 3])
# for j in i: print(j)

# for j in i: print(j)

class ITER():
	def __init__(self, max = 0):
		self.max = max

	def __iter__(self):
		self.n = 0
		return self

	def __next__(self):
		if self.n <= self.max:
			result = 2 ** self.n
			self.n += 1
			return result
		else:
			raise StopIteration

x = ITER(2)
# iter()関数なるものがあるみたい。
"""
配列やタプルをiter()の引数として設定することでイテレータに変換できます。
変換したらイテレータはnext()の引数として設定することで最初の要素を取り出すことができます。
もう一度next()を呼び出すと2番目の要素を、
さらにもう一度呼び出すと3番目の要素を取り出すことができるといった具合に配列の要素を順番に取り出すことが可能です。
取り出せなくなった時点でStopIteration例外が発生します。
"""
i = iter(x)
print(next(i))
print(next(i))
print(next(i))


# クラスをリスト見たいに実装したコードが下記のものになります。
class MyIterator(object):
	def __init__(self, *numbers):
		self._numbers = numbers
		self._i = 0
	def __iter__(self):
		# __next__()はselfが実装してるのでそのままselfを返す
		return self
	def __next__(self):  # Python2だと next(self) で定義
		if self._i == len(self._numbers):
			raise StopIteration()
		value = self._numbers[self._i]
		self._i += 1
		return value

my_iterator = MyIterator(10, 20, 30)
for num in my_iterator:
	print('hello %d' % num)