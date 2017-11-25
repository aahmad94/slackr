class Message < ApplicationRecord

  belongs_to :user

  belongs_to :interface, polymorphic: true 
end
