class Channel < ApplicationRecord

  has_many :users,
   through: :channel_subscriptions

  has_many :messages,
  as: :interface,
  dependent: :destroy

  has_many :channel_subscriptions,
  dependent: :destroy
end
