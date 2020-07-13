import datetime

d1 = datetime.datetime(2018, 3, 3, 8, 19)
td = datetime.timedelta(minutes=10)
go_time = d1 - td
print(go_time)
hour = go_time.hour
minute = go_time.minute

print(hour, minute)
print(type(hour))


#実行結果 2018-03-03 08:09:00


'''
from datetime import datetime


now_time = datetime.now()
year = now_time.year
print(type(year))
print(year)
'''

'''
import datetime


user_time = [2018, 3, 3, 9, 0]
user_transfer = 10

d_hour = 8
d_minute = 19

d1 = datetime.datetime(2018, 3, 3, d_hour, d_minute)
td = datetime.timedelta(minutes=user_transfer)
limited_time = d1 - td

print(limited_time.year)
'''
