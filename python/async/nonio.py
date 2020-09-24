# import asyncio
# import requests

# url = 'https://www.〇〇〇.com'

# # これが関数だよね。非同期にする。
# def ex(i):
# 	r = requests.get(url)
# 	return len(r.content)

# async def handler(loop):
# 	async def async_ex(i):
# 		async with asyncio.Semaphore(20):
# 			return await loop.run_in_executor(None, ex, i)
# 	tasks = [async_ex(i) for i in range(100)]
# 	return await asyncio.gather(*tasks)
# loop = asyncio.get_event_loop()
# data = loop.run_until_complete(handler(loop))


# import asyncio
# import datetime


# def display_date(end_time, loop):
# 	print(datetime.datetime.now())
# 	if (loop.time() + 1.0) < end_time:
# 		print(loop.time() + 1.0)
# 		# 今から1秒後にdisplay_dataを実行する。
# 		loop.call_later(1, display_date, end_time, loop)
# 	else:
# 		loop.call_soon(loop.stop) # 単に loop.stop() でもいい

# loop = asyncio.get_event_loop()

# # Schedule the first call to display_date()
# ## .timeはloopが実行された時間を計測している。そこから5秒後の時間を終わる時間として格納する。
# print('ループ開始時間： {}'.format(loop.time()))
# end_time = loop.time() + 5.0
# print('ループ終了： {}'.format(end_time))

# loop.call_soon(display_date, end_time, loop)

# # Blocking call interrupted by loop.stop()
# loop.run_forever()
# loop.close()


# import asyncio


# def set_result_to_future(value, future):
# 	# まだ処理が終わってないなら値をセットする。
# 	if not future.done():
# 		future.set_result(value)

# loop = asyncio.get_event_loop()
# # オブジェクトの作成
# future = loop.create_future()
# loop.call_soon(set_result_to_future, "DONE!", future)
# result = loop.run_until_complete(future)
# # これにより例外が発生した際にエラーを出して知らせる。
# assert(future.result() == result)
# print(result)
# loop.close()


# import asyncio
# import sys
# from random import randint


# def random_hit(future, n_upper, count=1, loop=None):
# 	if loop is None:
# 		loop = asyncio.get_event_loop()
# 	# 1からn_upperの間で一つ整数を取り出す。
# 	value = randint(1, n_upper)
# 	# 値が1ならfutureオブジェクトに1をセットする。
# 	if value == 1:
# 		future.set_result(count)
# 	# そうじゃないなら、再びrandom_hitを実行する。
# 	else:
# 		count += 1
# 		loop.call_soon(random_hit, future, n_upper, count, loop)


# def _callback(future):
# 	print("DONE!")

# try:
# 	# コマンドラインから引数を頂く[0]は実行ファイル名になるため無視する。
# 	n = int(sys.argv[1])
# except IndexError:
# 	print("Input an integer.")
# 	n = int(input())
# if n < 1:
#   n = 1
# loop = asyncio.get_event_loop()
# future = loop.create_future()
# # フューチャが終了したときに実行するコールバックを追加します。
# future.add_done_callback(_callback)
# print('まだです。')
# # イベントループに callback という関数なる仕事をその引数 args とともに渡します。
# loop.call_soon(random_hit, future, n)
# result = loop.run_until_complete(future)
# print(result)
# loop.close()


# import asyncio
# import sys
# from random import randint


# def random_hit(future, n_upper, count=1, loop=None):
# 	if loop is None:
# 		loop = asyncio.get_event_loop()
# 	value = randint(1, n_upper)
# 	if value == n_upper:
# 		print("Hit!")  # add
# 		future.set_result(count)
# 	else:
# 		print("Not yet.")  # add
# 		count += 1
# 		loop.call_soon(random_hit, future, n_upper, count, loop)


# def eternal_hello(loop):  # add
# 	print("Hello!")
# 	loop.call_soon(eternal_hello, loop)


# def _callback(future):
# 	print("DONE!")
# 	loop = asyncio.get_event_loop()

# try:
# 	n = int(sys.argv[1])
# except IndexError:
# 	print("Input an integer.")
# 	n = int(input())
# if n < 1:
# 	n = 1

# loop = asyncio.get_event_loop()
# future = loop.create_future()
# future.add_done_callback(_callback)
# loop.call_soon(random_hit, future, n)
# loop.call_soon(eternal_hello, loop)  # add
# result = loop.run_until_complete(future)
# print(result)
# loop.close()


# import asyncio
# import sys
# from random import randint


# async def boring_counting(id_, n):
# 	# コマンドラインで受け取った引数分ループする
# 	for i in range(n):
# 		print("eh, I am {}. {} :(".format(id_, i))
# 		await asyncio.sleep(0.2) #ここで一回止められる？他の作業が終わるまで
# 	print("FINISH! by {} :)".format(id_))


# def get_input():
# 	try:
# 		n = int(sys.argv[1])
# 	except IndexError:
# 		print("Input an integer.")
# 		n = int(input())
# 	if n < 1:
# 		n = 1
# 	return n

# # コマンドラインから引数を得る。
# n = get_input()
# # ループイベントを作成
# loop = asyncio.get_event_loop()
# # 空のset型を代入する。リストとの違いは重複した要素がない。順番はバラバラ
# futures = set()
# # 5回ループ
# for i in range(5):
# 	# コルーチンをfuturesオブジェクトに代入する。
# 	futures.add(boring_counting(i, n))

# loop.run_until_complete(asyncio.wait(futures))
# loop.close()


import asyncio
import sys
from random import randint


async def random_hit(n_upper, loop=None):
	if loop is None:
		loop = asyncio.get_event_loop()

	def _callback(future):
		print("DONE!")
	future = loop.create_future()
	future.add_done_callback(_callback)

	def _random_hit(n_upper, count):
		value = randint(1, n_upper)
		if value == n_upper:
			print("Hit!")
			future.set_result(count)
		else:
			print("Not yet.")
			count += 1
			loop.call_soon(_random_hit, n_upper, count)

	loop.call_soon(_random_hit, n_upper, 1)
	return (await future)


def get_input():
	try:
		n = int(sys.argv[1])
	except IndexError:
		print("Input an integer.")
		n = int(input())
	if n < 1:
		n = 1
	return n

n = get_input()
loop = asyncio.get_event_loop()
result = loop.run_until_complete(random_hit(n))
print(result)