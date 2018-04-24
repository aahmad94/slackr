class DirectmessageRelayJob < ApplicationJob
  def perform(directmessage, users)
    directmessage_json = Api::ChannelsController.render(
    partial: 'api/directmessages/directmessage',
    locals: { directmessage: directmessage }
    )

    users_hash = {}

    users.each do |user|
      users_hash[user.id] = JSON.parse(
        Api::UsersController.render(
        partial: 'api/users/user',
        locals: { user: user }
        )
      )
    end

    users.each do |user|
      ActionCable.server.broadcast(
      "user_#{user.username}",
      directmessage: JSON.parse(directmessage_json),
      users: users_hash
      )
    end
  end
end
