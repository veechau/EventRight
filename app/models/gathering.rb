class Gathering < ActiveRecord::Base
  validates :artist, :location, :start_date, :end_date, presence: true
  validates :tix_price, :funds, :goals, presence: true
  validates :status, inclusion: [:in_progress, :completed, :incomplete]

  belongs_to :category,
  belongs_to :organizer, class_name: 'User'

end
