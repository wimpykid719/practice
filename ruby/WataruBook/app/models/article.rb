class Article < ApplicationRecord
	belongs_to :user
	has_many :comments
	mount_uploader :image, ImageUploader
	has_many :likes
	def liked_by? user
		# whereはたくさん持ってこれる
    	likes.where(user_id: user.id).exists?
	end

end
