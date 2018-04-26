class UserChannel < ApplicationCable::Channel
  def subscribed
    stream_from "user_#{params[:email]}"
  end
end
