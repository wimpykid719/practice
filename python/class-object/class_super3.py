class Shape:
    squs = []
    def __init__(self, w, h):
        self.width = w
        self.height = h
        self.squs = self.squs

class Square(Shape):
    def __init__(self,w,h):
        super().__init__(w,h)

    def go_list(self):
        self.squs.append(self.width)

        return self.squs

S1 = Square(20, 20)
print(S1.go_list())
S2 = Square(10, 10)
print(S2.go_list())