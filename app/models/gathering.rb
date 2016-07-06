class Gathering < ActiveRecord::Base
  validates :artist, :location, :start_date, :end_date, :description, :tix_price, :funds, :goal, :category_id, presence: true
  validates :status, inclusion: ["ongoing", "completed", "incomplete"]

  belongs_to :category
  belongs_to :organizer, class_name: 'User'

  after_initialize :set_defaults

  private
  # 
  # def find_events_by_category(category_id)
  #   Category.find(id: self.category_id)
  # end

  def set_defaults
    self.start_date = Time.now
    self.funds = 0
    self.status = "ongoing"
  end



  # def find_events_by_category(cate_name)
  #   Gathering.all.where(...)
  # end

end
