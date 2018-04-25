class ChannelSubscription < ApplicationRecord
  validates :user_id, :channel_id, presence: true
  validates_inclusion_of :admin, in: [true, false]
  validates :user, uniqueness: { scope: :channel,
    message: "User is already in the channel." }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :channel
end
