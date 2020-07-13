class Prism:
    def __init__(self, height, width, depth, unit='cm3'):
        self.height = height
        self.width = width
        self.depth = depth
        self.unit = unit
    
    def content(self):
        p = self.height * self.width * self.depth
        return str(p) + self.unit

# p = Prism(40, 50, 20)

# print(p.content())


class Cube(Prism):
    def __init__(self, length):
        super().__init__(length, length, length)
        self.height = self.width = self.depth = length

c = Cube(20)
print(c.content())