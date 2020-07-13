def deco(func):
    def wrapper(*args, **kwargs):
        print('--start--')
        func(*args, **kwargs)
        print('--end--')
    return wrapper

@deco
def test():
    print('Hello Decorator')

test()

#*args, **kwargsこれが関数の引数になるらしいどう見ても謎の2つの引数にしかみえない

def deco2(func):
    import os
    def wrapper(*args,**kwargs):
        res = '--start--' + os.linesep
        res += func(*args,**kwargs) + '!' + os.linesep
        res += '--end--'
        return res
    return wrapper

@deco2
def test2():
    return('Hello Decorator')

print(test2())

def deco_p(func):
    def wrapper(*args, **kwargs):
        res = '<p>'
        res = res + func(args[0], **kwargs)
        res = res + '</p>'
        return res
    return wrapper

@deco_p
def test(str):
    return str

print(test('Hello Decorator!'))