word = 'HELLO'
i = 0
d = -1
drow = ''
while i < len(word):
	drow = drow + word[d]
	d = d - 1
	i = i + 1

print(drow)