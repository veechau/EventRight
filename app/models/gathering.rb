class Gathering < ActiveRecord::Base
  validates :artist, :location, :start_date, :end_date, presence: true
  validates :tix_price, :funds, :goal, presence: true
  validates :status, inclusion: ["ongoing", "completed", "incomplete"]

  belongs_to :category
  belongs_to :organizer, class_name: 'User'

  after_initialize :set_defaults

  private

  def find_events_by_category(category_name)
  end

  def set_defaults
    self.start_date = Time.now
    self.funds = 0
    self.status = "ongoing"
  end



  # def find_events_by_category(cate_name)
  #   Gathering.all.where(...)
  # end

end
