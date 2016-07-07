class Bookmark < ActiveRecord::Base
  validates :user_id, :gathering_id, presence: true
  validates :user_id, uniqueness: { scope: :gathering_id}


  belongs_to :user
  belongs_to :gathering
end
