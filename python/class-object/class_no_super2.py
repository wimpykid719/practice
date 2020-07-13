class Person():
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say_name(self):
		print("私の名前は" + self.name + "です。年齢は" + str(self.age) + "歳です。")



class JapanesePerson():
	def __init__(self, name, age):
		self.j = Person(name, age)

	def canDrinkAlcohol(self):
		return self.j.age >= 20


class BritishPerson():
	def __init__(self, name, age):
		self.b = Person(name, age)

	def canDrinkAlcohol(self):
		return self.b.age >= 18

	def say_name(self):
		print("I am " + self.b.name + ", " + str(self.b.age) + " yeas old.")

yamada = JapanesePerson("山田", 20)
yamada.j.say_name()
print(yamada.canDrinkAlcohol())

nick = BritishPerson("Nick", 17)
nick.say_name()
print(nick.canDrinkAlcohol())