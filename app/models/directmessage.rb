class Directmessage < ApplicationRecord

  has_many :users,
    through: :directmessage_subscriptions

  has_many :messages,
    as: :context,
    dependent: :destroy

  has_many :directmessage_subscriptions,
    dependent: :destroy

end
