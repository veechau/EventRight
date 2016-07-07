class Ticket < ActiveRecord::Base
  validates :attendee_id, :gathering_id, presence: true
  validates :attendee_id, uniqueness: { scope: :gathering_id }

  belongs_to :attendee, class_name: 'User'
  belongs_to :gathering, class_name: 'Gathering'

end
