from pytube import YouTube
# from enum import Enum

url = 'https://www.youtube.com/watch?v=eSjiCIlg37Q'

class GetItag():
	"""docstring for Youtubehq"""
	def __init__(self, url):
		yt = YouTube(url)
		self.alltag = yt.streams.all()
		self.yt = yt
	# 	self.video = []
	# 	self.music = []

	# def get_tag(self, sigh):
	# 	yt = self.yt
	# 	video = self.video
	# 	music = self.music


	def select(self):
		all_tag = self.alltag

		# for class_d in all_tag:
		# 	res = class_d.resolution
		# 	itag = class_d.itag

		# 	if res == None:
		# 		audio = itag
		# 		return audio

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag
			mime_type = class_d.mime_type
			#print(mime_type)

			if res == '1080p':
				if 'mp4' in mime_type:
					print(mime_type)
					highest = itag
					return highest
				

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag

			if res == '720p':
				higher = itag
				return higher

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag

			if res == '480p':
				high = itag
				return high

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag

			if res == '360p':
				low = itag
				return low

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag

			if res == '240p':
				lower = itag
				return lower

		for class_d in all_tag:
			res = class_d.resolution
			itag = class_d.itag

			if res == '144p':
				lowest = itag
				return lowest

	def video_get(self):
		itag_n = self.select()
		print(itag_n)
		# self.yt.streams.get_by_itag(itag_n).download()
		print('complete')


		
			


video = GetItag(url)
video.video_get()
# print(SelectTag(y_itag.select()))




# tag = 137
# yt.streams.get_by_itag(int(tag)).download()
# firsは最高画質ではなかった。
# stream = yt.streams.first()

# <Stream: itag="22" mime_type="video/mp4" res="720p" fps="30fps" vcodec="avc1.64001F" acodec="mp4a.40.2">