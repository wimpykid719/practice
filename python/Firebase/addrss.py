import feedparser
# firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# firebaseにurlを追加する。

def firebase_access():
	cred = credentials.Certificate("アップロードしたいjson")

	firebase_admin.initialize_app(cred, {
	    'databaseURL': '自分のデータベース',
	    'databaseAuthVariableOverride': {
	        'uid': 'my-service-worker'
	    }
	})
	# dbのアクセスする場所
	ref = db.reference('/my_select/')
	return ref

def add_url(ref):
	l = feedparser.parse('bookmarks.rss')
	bookmarks = {}
	i = 1
	for entry in reversed(l.entries):
		url = 'url_' + str(i)
		d = {url:{
				'name':entry.link,
				'flag':0
		}}
		bookmarks.update(d)
		i += 1
	ref.update(bookmarks)

add_url(firebase_access())