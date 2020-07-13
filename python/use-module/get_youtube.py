from pytube import YouTube

YouTube('https://www.youtube.com/watch?v=eSjiCIlg37Q').streams.get_by_itag(140).download()
 

# url = 'https://www.youtube.com/watch?v=eSjiCIlg37Q'
# yt = YouTube(url)
# yt.streams.get_by_itag(22).download()