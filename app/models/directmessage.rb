class Directmessage < ApplicationRecord
  validates :directmessage_name, presence: true, uniqueness: true

  has_many :users,
    through: :dm_subscriptions

  has_many :dm_subscriptions,
    dependent: :destroy

  has_many :messages,
    as: :interface,
    dependent: :destroy
end
