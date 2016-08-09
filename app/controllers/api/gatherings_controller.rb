class Api::GatheringsController < ApplicationController

  def index
    @gatherings = Gathering.all.includes(:tickets, :bookmarks)
    @gatherings.each do |gathering|
      gathering.funds = gathering.tickets.count * gathering.tix_price
    end
    render :index
  end

  def create
    @gathering = Gathering.new(gathering_params)
    @gathering.organizer_id = current_user.id
    if @gathering.save
      render :show
    else
      render json: @gathering.errors, status: 422
    end
  end

  def show
    @gathering = Gathering.find(params[:id]).includes(:tickets, :bookmarks)
    @gathering.funds = @gathering.tickets.count * @gathering.tix_price
    
    @gathering.status = "completed" if @gatering.funds > @gathering.goal && Time.now <= @gathering.end_date

    @gathering.status = "incomplete" if @gatering.funds < @gathering.goal && Time.now > @gathering.end_date
    render :show
  end

  def update
    @gathering = Gathering.find(params[:id]).includes(:tickets, :bookmarks)
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
      @errors = @gathering.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  private

  def gathering_params
    params.require(:gathering).permit(
      :artist,
      :place_name,
      :location,
      :lat,
      :lng,
      :start_date,
      :end_date,
      :description,
      :image,
      :tix_price,
      :funds,
      :goal,
      :status, #should be automatically set based on tix_price compared to goal
      :category_id #from check boxes
      )
  end

end
