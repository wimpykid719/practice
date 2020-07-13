class Shape:
	squs = []
	def __init__(self, w, h):
		self.width = w
		self.height = h
		Shape.squs.append(self.width)

	def return_squs(self):
		return Shape.squs

class Square(Shape):
	pass
	# def go_list(self):
	# 	Shape().init(self)

S1 = Square(20, 20)
# print(S1.return_squs())
S2 = Square(10, 10)
# print(S2.return_squs())

# class Base:
#     def func1(self):
#         print('func1')
         
# class Sub(Base):
#     def func1(self): # 親クラスのメソッドをオーバーライド
#         print('sub func2')
 
 #baseが親で下が子でオーバーライドによって親の機能がこの機能で上書き
# obj = Sub()
# obj.func1()

class Base1:
    def func1(self):
        print('func1')
 
class Base2:
    def func2(self):
        print('func2')
     
class Sub(Base1, Base2):
    def func(self):
        super().func1()
        super().func2()
 
obj = Sub()
obj.func()

