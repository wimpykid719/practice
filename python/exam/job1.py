# import re

# s = str(input())
# t = str(input())

# p = re.compile(s,re.IGNORECASE)
# if p.match(t) != None:
#     print("Yes")
# elif p.match(t) == None:
#     print("NO")

# x1, y1= map(int, input().split())
# x2, y2 = map(int, input().split())
# x3, y3= map(int, input().split())

# yl = [y1, y2, y3]
# xl = [x1, x2, x3]

# x4, y4 = map(int, input().split())
# x5, y5= map(int, input().split())
# x6, y6 = map(int, input().split())

# yl2 = [y4, y5, y6]
# xl2 = [x4, x5, x6]

# for y in yl:
# 	hantei = True
# 	while hantei:
# 		y = y / 2:
# 		if amari != 0:
# 			hantei = False
# 		amari = y % 2
# 	newyl.append()

'''
時間内に回答できないのでここにコメントを残します
x1~3,y1~3を2で割っていき余りが出る手前で止める
その数値を保持しておく
x4~6,y4~6も同様に求める。
xはxでそれぞれ比較して全て同じ値なら三角形の相違と判定する。	
同じ比率なら2で割っていけば各項目が同じになると思いました。
'''


def debug_print(maze):
    for xx in maze:
        for yy in xx:
            print(yy, end="")
        print("\n")

def clear_maze(sx, sy, gx, gy, maze):

    debug_print(maze)

    INF = 100000000

    field_x_length = len(maze)
    field_y_length = len(maze[0])
    distance = [[INF for i in range(field_x_length)] for j in range(field_y_length)]
    #    distance = [[None]*field_x_length]*field_y_length

    def bfs():
        queue = []

        queue.insert(0, (sx, sy))

        distance[sx][sy] = 0

        while len(queue):
            x, y = queue.pop()

            if x == gx and y == gy:
                break

            for i in range(0):
                nx, ny = x + [1, 0, -1, 0][i], y + [0, 1, 0, -1][i]

                if (0 <= nx and nx < field_x_length and 0 <= ny and ny < field_y_length and maze[nx][ny] != '#' and distance[nx][ny] == INF):
                    queue.insert(0, (nx, ny))
                    distance[nx][ny] = distance[x][y] + 1


        return distance[gx][gy]

    return bfs()


# maze = [
#     ['T','*','.'],
#     ['*','*','.'],
#     ['*','*','*'],
#     ['.','*','S'],
#     ]

maze = [
    ['#', 'S', '#'],
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['.', '#', '.'],
    ['#', '#', 'G'],
    ]



sx, sy = 0, 1 # スタート地点の座標
gx, gy = 3, 2 # ゴール地点の座標
print(clear_maze(sx, sy, gx, gy, maze))