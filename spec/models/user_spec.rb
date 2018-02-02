require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(email: 'jack_bruce@gmail.com', displayname: "jack", password: 'abcdef')
      user = User.find_by_credentials('jack_bruce@gmail.com', 'abcdef')
      expect(user.password).not_to be('abcdef')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(email: 'jack_bruce@gmail.com', displayname: "jack", password: 'abcdef')
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      jack = User.create(email: 'jack_bruce@gmail.com', displayname: "jack", password: 'abcdef')
      expect(jack.session_token).not_to be_nil
    end
  end

  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should have_many(:channels).through(:channel_subscriptions) }
  it { should have_many(:directmessages).through(:dm_subscriptions) }
end
