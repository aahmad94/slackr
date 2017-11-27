class Message < ApplicationRecord

  validates :body, presence: true
  after_commit { MessageRelayJob.perform_later(self, self.interface) }

  belongs_to :user

  belongs_to :interface,
    polymorphic: true
end
