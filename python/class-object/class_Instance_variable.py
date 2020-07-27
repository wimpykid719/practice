class Shape():
	pass
	
class Square(Shape):
	squs = []
	n = 1
	def __init__(self, w, h):
		self.width = w
		self.height = h
		self.squs.append((self.width, self.height))
		self.n = n + 100

square = Square(40, 40)
square1 = Square(50, 50)
print(square1.n)
print(square.n)

print(square1.squs)#[(40, 40), (50, 50)]イクラス変数らしい。


# class Shape():


# class Square(Shape):
#     square_list = []

#     def __init__(self, s1):
#         self.s1 = s1
#         self.square_list.append(self)

  

# a_square = Square(29)
# print(a_square)

class SameBlock():
	def __init__(self, n):
		self.name = n

same1 = SameBlock('wataru')
samew = same1
same2 = SameBlock('hiroki')

print(same1 is samew)
print(same1 is same2)



