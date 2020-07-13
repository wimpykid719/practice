import os

# class Test():
#     def __init__(self, url):
#         self.url = url
    
#     def change(self):
#         self.url = 'https'
    
#     def changed(self):
#         self.change()

# test = Test('ftp')
# print(test.url)

# p = 'hey'

# def test_test(hensuu):
    
#     if hensuu:
#         print(hensuu)

# test_test(p)


# d = {'data':[1]}
# d = {'hi':'j'}
# print(d)

title = 'drink'

path = os.getcwd()
directory = path + '/json'
os.makedirs(directory, exist_ok=True)
with open(path + '/json/{}.json'.format(title), 'w') as f:
    f.write('hi')