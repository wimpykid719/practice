# sample = 0
# test = 0
# sample.test = 10

# print(sample)
# print(sample.test)

# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def overAge(self, age):
#         return self.age >= age

#     def say(self):
#         print('私の名前は%sです。' % self.name)

# taro = Person('太郎', 18)
# taro.say()
# if taro.overAge(20):
#     print('%sは成年です。' % taro.name)
# else:
#     print('%sは未成年です。' % taro.name)

class Boku(object):
    # これはクラス変数
    subject = "ぼくは"
    name = "ドラえもん"
    
    def __init__(self, nickname):
        self.nickname = nickname # これはインスタンス変数
        print(self.__class__.__name__)

# wataru = Boku('wakasu')


# 別のサンプル
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def overAge(self, age):
        return self.age >= age

    def say(self):
        print('これは' + str(self.age))
        print('私の名前は%sです。' % self.name)

taro = Person('太郎', 18)
taro.say()

if taro.overAge(20):
    print('%sは成年です。' % taro.name)
else:
    print('%sは未成年です。' % taro.name)

taro = Person('太郎', 18)
print(taro)
Person.say(taro)


if Person.overAge(taro, 20):
    print('%sは成年です。' % taro.name)
else:
    print('%sは未成年です。' % taro.name)


