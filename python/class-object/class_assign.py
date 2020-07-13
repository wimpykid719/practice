class Myclass:
    def __init__(self):
        self.i = 100

a = Myclass()

print(a.i)

a.d = 200
#ちゃんと代入される

print(a.d)