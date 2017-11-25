class Message < ApplicationRecord

  validates :body, presence: true
  after_commit { MessageRelayJob.perform_later(self, self.context) }

  belongs_to :user

  belongs_to :interface,
    polymorphic: true
end
