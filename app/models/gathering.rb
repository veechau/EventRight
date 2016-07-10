class Gathering < ActiveRecord::Base
  validates :artist, :location, :start_date, :end_date, :description, :tix_price, :funds, :goal, :category_id, presence: true
  validates :status, inclusion: ["ongoing", "completed", "incomplete"]
  validate :validate_end_date_before_start_date
  validate :tix_price_cannot_be_greater_than_goal

  after_initialize :add_default_image_to_events

  belongs_to :category
  belongs_to :organizer, class_name: 'User'
  has_many :tickets, dependent: :destroy
  has_many :bookmarks, dependent: :destroy

  after_initialize :set_defaults

  private


  def set_defaults
    self.start_date = Time.now
    self.status = "ongoing"
  end


  def validate_end_date_before_start_date
    if self.end_date && self.start_date
      errors.add(:end_date, " must be in the future") if self.end_date < self.start_date
    end
  end

  def tix_price_cannot_be_greater_than_goal
    if self.tix_price && self.goal
      errors.add(:tix_price, " can't be greater than goal") if
        self.tix_price > self.goal
    end
  end

  def add_default_image_to_events
    self.image = "https://res.cloudinary.com/vechau/image/upload/c_fill,h_300,w_300/v1468176030/hipsterlogogenerator_1468175650423_dyn2b9.png" unless self.image.length > 6
  end

end
