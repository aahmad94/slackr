class DmSubscription < ApplicationRecord

  belongs_to :user
  belongs_to :directmessage

end
