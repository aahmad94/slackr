class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :email, :password_digest, presence: true
  validates :displayname, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :channel_subscriptions,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'ChannelSubscription',
    dependent: :destroy

  has_many :channels,
    through: :channel_subscriptions

  has_many :dm_subscriptions,
    dependent: :destroy

  has_many :directmessages,
    through: :dm_subscriptions

    has_many :messages

  attr_reader :password


  # ---------- Auth stuff ----------
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  # # ---------- Channel stuff ----------

  # def become_admin(channel)
  #   self.channel_memberships.create channel_id: channel.id,
  #                                   admin: true
  # end

  # def admined_channels
  #   self.channels.where(channel_memberships: {admin: true})
  # end

  # # ---------- Room stuff ----------

  # def direct_message_directmessages
  #   self.directmessages.select { |room| room.users.length == 2 }
  # end

  # def dm_user_ids
  #   self.direct_message_directmessages.map do |dmr|
  #     dmr.user_ids.reject { |id| id == self.id }[0]
  #   end
  # end
end
