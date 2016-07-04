class Bookmark < ActiveRecord::Base
  validates :user_id, :gathering_id, presence: true

  belongs_to :user
  belongs_to :gathering
end
