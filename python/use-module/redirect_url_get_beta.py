from time import sleep
import requests
import re

def login(target_url):

  try :
    r = requests.get(target_url)
    while r.url == target_url:
      print(".", end="")
      sleep(0.5)
      r = requests.get(target_url)  
    url = r.url

  except requests.exceptions.ConnectionError as e:
    url = e.request.url

  return url

target_url = 'https://www.pinterest.com/r/pin/554505772848816821/4995915543595742901/51a16eafabbb128c3c57b4a5087421b7a031e52bcbc41b26a4cb756137b347a6'

print(login(target_url))