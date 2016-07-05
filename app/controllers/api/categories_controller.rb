class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render :index
  end

  def create
    @category = Category.new(category_params)


    if @category.save
      render :show
    else
      render json: @category.errors, status: 422
    end
  end

  def show
    @category = Category.find(params[:id])
    render :show
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(gathering_params)
      render :show
    else
      @errors = @category.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @category = Category.find(param[:id])

    if @category.destroy
      render :index
    else
      render json: @category.errors
    end
  end

  private

  def category_params
    params.require(:category).permit(:title, :description, :image)
  end

end
