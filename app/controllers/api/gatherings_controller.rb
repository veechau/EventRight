class Api::GatheringsController < ApplicationController

  def index
      @gatherings = Gathering.all
      render :index
  end

  def create
    @gathering = Gathering.new(gathering_params)

    if @gathering.save
      render :show
    else
      @errors = @gathering.errors.full_messages
      render 'api/shared/error', status: 422
  end

  def update
    @gathering.find(params[:id])
    if @gathering.update(gathering_params)
      render :show
    else
      @errors = @gathering.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end


  def destroy
    @gathering = Gathering.find(params[:id])

    if @gathering.destroy
      render :index
    else
      render json: @gathering.errors
  end

  private
  
  def gathering_params
    params.require(:gathering).permit(
      :artist,
      :location,
      :start_date,
      :end_date,
      :description,
      :image,
      :tix_price,
      :goal,
      :status, #should be automatically set based on tix_price compared to goal
      # :organizer_id, #get from current user
      :category_id #from check boxes
      )
  end

end
