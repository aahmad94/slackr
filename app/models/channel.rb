class Channel < ApplicationRecord
  validates :channel_name,
            presence: true,
            uniqueness: true,
             format: {
              with: /\A[a-z0-9_]+\Z/,
              message: "can only have lowercase alphanumeric characters"
            }

  has_many :channel_subscriptions,
            dependent: :destroy

  has_many :users,
            through: :channel_subscriptions

  has_many :messages,
            as: :interface,
            dependent: :destroy
    
  def self.search(query)
    self.where("channel_name ILIKE ?",
                "%#{query}%")
  end

  def add_admin(user)
    self.channel_memberships.create user_id: user.id,
                                    admin: true
  end

  def admins
    self.users.where(channel_memberships: {admin: true})
  end

  def admin_ids
    self.admins.map do |admin|
      admin.id
    end
  end
    
end
