import random

def hangman(words):
	word = random.choice(words)
	wrong = 0
	stages = ["",
			  "______      ",
			  "|           ",
			  "|     |     ",
			  "|     O     ",
			  "|    /|\    ",
			  "|    / \    ",
			  "|           "
			  ]
	rletters = list(word)
	board = ["_"] * len(word)
	win = False
	print("welcome to hangman!")

	while wrong < len(stages) - 1:
		print("\n")
		msg = "1文字を予想してね"
		#inputでユーザの入力文字を受け取る
		char = input(msg)
		if char in rletters:
			#indexでrlettersの中にあるcharと同じ文字の場所番号を聞いてる
			cind = rletters.index(char)
			board[cind] = char
			rletters[cind] = '$'
		else:
			wrong += 1
		#joinはリストの文字列を連結して出力
		print(" ".join(board))
		e = wrong + 1
		print("\n".join(stages[0:e]))
		if "_" not in board:
			print("あなたの勝ち！")
			print(" ".join(board))
			win = True
			break

	if not win:
		print("\n".join(stages[0:wrong + 1]))
		print("あなたの負け！正解は {}.".format(word))

words =["hello",
		"fuckyou",
		"fine"]

hangman(words)