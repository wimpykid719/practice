# import asyncio

# async def sleep_and_print(txt):
# 	await asyncio.sleep(1)
# 	print(txt)

# loop = asyncio.get_event_loop()
# loop.run_until_complete(sleep_and_print('hello'))


import asyncio
import time

async def task_one():
	print("task_one: before sleep")
	# 制御を手放して次の処理task_twoに移れる。
	await asyncio.sleep(0.1)
	print("task_one: after sleep")
	return 1

async def time_sleep():
	time.sleep(5)
	print("time_sleep")

async def task_two():
	print("task_two: before task_one")
	# 処理を手放す事が出来ずそのまま寝る。
	await time_sleep()
	print("task_two: after task_one")
	return 2

async def test(loop):
	t1 = loop.create_task(task_one())
	t2 = loop.create_task(task_two())

	#str()とほぼ同じだがどのオブジェクトと紐付いているのかわかる。
	print(repr(await t1))
	print(repr(await t2))

def main():
	loop = asyncio.get_event_loop()
	try:
		loop.run_until_complete(test(loop))
	finally:
		loop.close()

main()