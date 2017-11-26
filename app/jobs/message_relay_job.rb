class MessageRelayJob < ApplicationJob

  queue_as :default
  def perform(message, interface)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    # user_json = Api::UsersController.render(
    # partial: 'api/users/user',
    # locals: { user: message.user }
    # )
    #
    # if message.interface_type == "Channel"
    #   context_json = Api::ChannelsController.render(
    #   partial: 'api/channels/channel',
    #   locals: { channel: message.interface }
    #   )
    # end
    interface.users.each do |user|
      ActionCable.server.broadcast("user_#{user.displayname}",
                                 message: JSON.parse(message))
    end
  end
end
