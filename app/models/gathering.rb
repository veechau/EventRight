class Gathering < ActiveRecord::Base
  validates :artist, :location, :start_date, :end_date, presence: true
  validates :tix_price, :funds, :goal, presence: true
  validates :status, inclusion: ["ongoing", "completed", "incomplete"]

  belongs_to :category
  belongs_to :organizer, class_name: 'User'

  after_initialize :set_start_fund_date

  def set_start_fund_date
    self.start_date = Time.now
  end



  # def find_events_by_category(cate_name)
  #   Gathering.all.where(...)
  # end

end
