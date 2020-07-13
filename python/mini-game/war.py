from random import shuffle

class Card(object):
	"""docstring for Card"""
	suits = ['spades', 'hearts','diamonds', 'clubs']
	values = [None, None, '2', '3', '4', '5', '6', '7', '8', '9', '10',
			  'Jack', 'Queen', 'King', 'Ace']
	def __init__(self, v, s):
		self.value = v
		self.suit = s
	def __lt__(self, c2):
		if self.value < c2.value:
			return True
		if self.value == c2.value:
			if self.suit < c2.suit:
				return True
			else:
				return False

	def __gt__(self, c2):
		# print(c2.__class__.__name__)
		# print(c2.value)
		# print(self)
		# print(self.value)
		# reprを消してやるとvaluesの中身が見れる。
		# print(self.values)
		# selfにはCardクラスの名前と第一に引数が入ってる。

		if self.value > c2.value:
			return True
		if self.value == c2.value:
			if self.suit > c2.suit:
				return True
			else:
				return False
	def __repr__(self):
		v = self.values[self.value] + ' of ' \
			+ self.suits[self.suit]
		return v
		#もしstrの特殊メソッドが書いてあったらそっちが優先される。strは人間が読みやすいように
		# reprは等価の値で返すstr 1.0 repr 1.0000000000001とか同じ引数でも値が変わるときがある。

# ここでトランプを生成
# デッキから一枚カードを取り出すメソッドもある！
class Deck:
	def __init__(self):
		self.cards = []
		for i in range(2, 15):
			for j in range(4):
				self.cards.append(Card(i, j))
				# この時にreprの特殊メソッドも入ったと思う。
		shuffle(self.cards)
		#print(self.cards)

	def rm_card(self):
		if len(self.cards) == 0:
			return
		cards = self.cards.pop()
		print('{}: これはselfの中身'.format(cards))
		# ここですでにofが追加されてる。
		return cards

# deck = Deck()
# for card in deck.cards:
# 	print(card)

class Player:
	def __init__(self, name):
		self.wins = 0
		self.card = None
		self.name = name

# Gameクラスがスタート
# 次にデッキクラス
class Game:
	def __init__(self):
		# プレーヤー１名前と表示されてその後ろに名前を入力
		name1 = input('プレーヤー１名前')
		name2 = input('プレーヤー２名前')
		self.deck = Deck()
		self.p1 = Player(name1)
		self.p2 = Player(name2)

	def wins(self, winner):
		w = 'このラウンドは{}が勝ちました'
		w = w.format(winner)
		print(w)

	def draw(self, p1n, p1c, p2n, p2c):
		#ここのselfは一体どうなってる
		# print(format(self)) selfにはGameクラスが入ってる？
		# print(p1n)
		d = '{}は{}、{}は{}を引きました。'
		# formatはクラスを文字列に直してる。
		d = d.format(p1n, p1c, p2n, p2c)
		print(d)

	def play_game(self):
		#print(type(self))selfにはGameが入ってる
		cards = self.deck.cards
		print('戦争を始めます')
		# デッキが2枚以下になるまでループ
		while len(cards) >= 2:
			m = 'qで終了、それ以外のキーでplay:'
			response = input(m)
			if response == 'q':
				break
			p1c = self.deck.rm_card()
			# gtがあるのはCard() gtを使うのはGame().play_gameのGame().Deck().rm_card
			# self.deck = Deck() → cards = self.deck.cards deck.cardsはDeckクラスのself.cards = []
			# self.deck.rm_card → Game().Deck().rm_card
			#print(self.deck.cards)
			p2c = self.deck.rm_card()
			#print(self.deck.cards)
			p1n = self.p1.name
			p2n = self.p2.name
			#自動で引かれたカードが何か表示
			self.draw(p1n, p1c, p2n, p2c) #selfをGame()に変えたらカード引くたびに名前を聞かれるようになったでも打ち込んでも名前を打っても表示は変わらない
			#どっちのカードが強いか比較して処理する。
			if p1c > p2c:
				# playerクラスのwinに値を追加
				self.p1.wins += 1
				self.wins(self.p1.name)
			else:
				self.p2.wins += 1
				self.wins(self.p2.name)

		win = self.winner(self.p1, self.p2)
		print('ゲーム終了、{}の勝利です！'.format(win))

	def winner(self, p1, p2):
		if p1.wins > p2.wins:
			return p1.name
		if p1.wins < p2.wins:
			return p2.name
		return '引き分け!'

game = Game()
game.play_game()
# play_game(game)動かんかった
# print(game.p1.name)