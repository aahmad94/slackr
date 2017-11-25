class Directmessage < ApplicationRecord

  has_many :users,
    through: :dm_subscriptions

  has_many :messages,
    as: :interface,
    dependent: :destroy

  has_many :dm_subscriptions,
    dependent: :destroy

end
