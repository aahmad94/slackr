class DmSubscription < ApplicationRecord
  validates :user_id, :directmessage_id, presence: true
  validates :user, uniqueness: { scope: :room,
    message: "%{value} is already in this channel" }

  belongs_to :user
  belongs_to :directmessage

end
