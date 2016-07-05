class Api::BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.where(user_id: current_user.id)
    render :index
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
      render :show
    else
      @errors = @bookmark.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def show
    @bookmark = Bookmark.find(params[:id])
    render :show
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])

    if @bookmark.destroy
      render :index
    else
      render json: @bookmark.errors
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(
      :user_id, #get from current user
      :gathering_id #gathering route params
      )
  end
end
