import math

class Apple:
	"""docstring for ClassName"""
	def __init__(self, w, c, s, p):
		self.weght = w
		self.color = c
		self.size = s
		self.price = p

Apple = Apple(100, 'Green', 200, 500)

class Circle:
	def __init__(self, w, h):
		self.width = w
		self.height = h
	def area(self):
		return self.width / 2 * self.width / 2 * math.pi
Circle = Circle(100, 400)
# print(Circle.area())

class Triangle:
	"""docstring for """
	def __init__(self, w, h):
		self.width = w
		self.height = h
	def area(self):
		return self.width * self.height / 2

Triangle = Triangle(300, 400)
# print(Triangle.area())



class Shape:
	squs = []
	def __init__(self, w, h):
		self.width = w
		self.height = h
		self.squs = self.squs

	def what_am_i(self):
		print('I am Shape')

class Square(Shape):
	def __init__(self, w, h):
		super().__init__(w, h)

	def go_list(self):
		self.squs.append(self.width)

		return self.squs
	def calculate_perimeter(self):
		return self.width * 4

	def change_size(self, plus):
		self.width = self.width + plus


class Reactangle(Shape):
	"""docstring for Reactangle"""

	def calculate_perimeter(self):
		return self.width * 2 + self.height * 2


# Reactangle = Reactangle(500, 200)
# Square = Square(20)
# print(Reactangle.calculate_perimeter())
# print(Square.calculate_perimeter())
# Square.change_size(-5)
# print(Square.calculate_perimeter())

s1 = Square(20, 20)
print(s1.go_list())
s2 = Square(10, 10)
print(s2.go_list())

# print(Square.squs)
Reactangle = Reactangle(20, 50)
# Reactangle.what_am_i()

class Horse:
	def __init__(self, name, breed, owner):
		self.name = name
		self.breed = breed
		self.owner = owner

class Rider:
	def __init__(self, name):
		self.name = name

wataru = Rider('Wakasugi Wataru')
pig = Horse('Pigey', 'longleg', wataru)
# print(pig.owner.name)

class AlwaysPositive:
	def __init__(self, number):
		self.n = number

	def __add__(self, other):
		return abs(self.n + other.n)

x = AlwaysPositive(-20)
y = AlwaysPositive(10)
# print(x)
# print(x + y)

class Squares:
	squs = []

	def __init__(self, w):
		self.width = w
		self.squs.append(self.width)
	def print_size(self):
		print('{} by {} by {} by {}'.format(self.width, self.width, self.width, self.width))

# Square1 = Squares(20)
# print(Square1.squs)
# Square2 = Squares(10)
# print(Square1.width)
# print(Square2.squs)

# Square2.print_size()









		