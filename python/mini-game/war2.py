class Deck:
    pass


class Game:
    def __init__(self):
        # プレーヤー１名前と表示されてその後ろに名前を入力
        name1 = input('プレーヤー１名前')
        name2 = input('プレーヤー２名前')
        self.deck = Deck()
        self.p1 = Player(name1)
        self.p2 = Player(name2)

    def __str__(self):
        return "Game with P1({p1_name}): {p1_wins}wins, P2({p2_name}): {p2_wins}wins".format(
            p1_name=self.p1.name,
            p2_name=self.p2.name,
            p1_wins=self.p1.wins,
            p2_wins=self.p2.wins,
        )


class Player:
    def __init__(self, name):
        self.wins = 0
        self.card = None
        self.name = name


def main():
    game = Game()
    game.p1.wins += 1
    print(game)


if __name__ == '__main__':
    main()