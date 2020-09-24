list_x = ["apple", "orange", "banana", "peach", "grape"]
list_y = [120, 150, 80, 300, 800]

# 複数のリストを同時にイテレート出来る。
for x, y in zip(list_x, list_y):
	print(f"{x}は１個{y}円です。")

print(type(zip(list_x, list_y)))

list_x2 = ["apple", "orange", "banana", "peach", "grape"]

print(list_x2)