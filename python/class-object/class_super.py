

class C:
    def __init__(self):
        self.c_value = 'C'
        print('class C init')
        

class D(C):
    def __init__(self):
        self.c_value = 'D'
        print(self.c_value)
        print('class D init')
        super().__init__()

d = D()
print(d.c_value)