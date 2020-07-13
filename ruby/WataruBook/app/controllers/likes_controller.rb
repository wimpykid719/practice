class LikesController < ApplicationController
	before_action :authenticate_user!
	
    def create
        article = Article.find(params[:article_id])
        current_user.likes.create(article_id: article.id)
        
        
        # like = Like.new
        # like.user_id = current_user.id
        # like.article_id = article.id
        # like.save

		redirect_to articles_path
	end

    def destroy
        article = Article.find(params[:article_id])
        like = current_user.likes.find_by(article_id: article.id)
        like.destroy

		redirect_to articles_path
    end
end
