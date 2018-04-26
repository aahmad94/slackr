class MessageRelayJob < ApplicationJob
  def perform(message, interface)
    message_json = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    user_json = Api::UsersController.render(
      partial: 'api/users/user',
      locals: { user: message.user }
    )

    if message.interface_type == 'Channel'
      interface_json = Api::ChannelsController.render(
      partial: 'api/channels/channel',
      locals: { channel: message.interface }
      )
    else
      interface_json = Api::ChannelsController.render(
      partial: 'api/directmessages/directmessage',
      locals: { directmessage_rm: message.interface }
      )
    end

    interface.users.each do |user|
      ActionCable.server.broadcast(
      "user_#{user.email}",
      message: JSON.parse(message_json),
      users: { message.user.id => JSON.parse(user_json) },
      message.interface_type.downcase => JSON.parse(interface_json))
    end
  end
end
