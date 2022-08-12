class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    # redirect_to action: :index # メモを保存した後にトップページへリダイレクトされる
    render json:{ post: post } # レスポンスをJSONに変更
  end
end
