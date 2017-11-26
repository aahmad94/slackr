class ChannelSubscription < ApplicationRecord
  validates :user_id, :channel_id, presence: true
  validates :user, uniqueness: { scope: :channel,
    message: "User is already in the channel."}
  belongs_to :user
  belongs_to :channel
end
