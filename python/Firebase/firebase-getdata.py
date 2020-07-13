import feedparser
import json
import random
# firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

def firebase_access():
	cred = credentials.Certificate("jsonファイル")

	firebase_admin.initialize_app(cred, {
	    'databaseURL': 'urlアクセスする',
	    'databaseAuthVariableOverride': {
	        'uid': 'my-service-worker'
	    }
	})
	# dbのアクセスする場所
	ref = db.reference('/my_select/bookmarks')
	return ref

def bookmark_not_tweeted(ref):
	snapshot = ref.order_by_child('flag').equal_to(0).get()
	return snapshot

def pickup(snapshot, ref):
	urlplace = random.choice(list(snapshot.items()))
	# ('url_231', {'flag': 0, 'name': 'https://www.slideshare.net/ngzm/oauth-10-oauth-20-openid-connect'})
	# print(urlplace)
	# flagには以下のデータ OrderedDict([('url_319', {'flag': 0, 'name': 'http://moro-archive.hatenablog.com/entry/2015/12/30/000000'})])
	flag = ref.order_by_child('name').equal_to(urlplace[1]['name']).get()
	flag = list(flag.items())
	urln = flag[0][0]
	print(urln)
	# ref.child(urln).update({'flag':1})
	return urlplace[1]['name']

ref = firebase_access()
snapshot = bookmark_not_tweeted(ref)
pickup(snapshot, ref)