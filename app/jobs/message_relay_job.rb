class MessageRelayJob < ApplicationJob
  def perform(message, interface)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    ActionCable.server.broadcast("channel_#{interface.channel_name}",
                                 message: JSON.parse(message))
  end
end
