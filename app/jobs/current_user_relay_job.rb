class CurrentUserRelayJob < ApplicationJob

queue_as :default

def perform(current_user)
  current_user_json = Api::MessagesController.render(
    partial: 'api/users/show',
    locals: { user: current_user }
  )

  ActionCable.server.broadcast(
  "user_#{user.display_name}",
  currentUser: JSON.parse(current_user_json)
  )
   end
 end
