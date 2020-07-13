class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_name(self):
        print("私の名前は" + self.name + "です。年齢は" + str(self.age) + "歳です。")


class JapanesePerson():
    def __init__(self, name, age):
        self.p = Person(name, age)

    def say_hello(self):
        print("こんにちは")


yamada = JapanesePerson("山田", 20)
yamada.p.say_name()
yamada.say_hello()