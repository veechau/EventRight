class Api::TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
    render :index
  end

  def create
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      render :show
    else
      @errors = @ticket.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def show
    @ticket = Ticket.find(params[:id])
    render :show
  end

  def destroy
    @ticket = Ticket.find(params[:id])

    if @ticket.destroy
      render :index
    else
      render json: @ticket.errors
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(
      :attendee_id, #get from current user
      :gathering_id #gathering route params
      )
  end
end
