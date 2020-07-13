class Dog:
    def __init__(self, name, breed, owner):
        self.name = name
        self.breed = breed
        self.owner = owner

class Person:
    def __init__(self, name):
        self.name = name

x = Person("Mick Jaggger")
print(x.name)

stan = Dog("stanly", "Bulldog", x)
print(stan.owner.name)
#OwnerがPersonクラスを指しnemeはその中にあるname変数をさす。