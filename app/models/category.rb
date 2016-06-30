class Category < ActiveRecord::Base
  validates :title, :description, :image, null: false

  has_many :events
end
