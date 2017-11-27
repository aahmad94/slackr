class Api::MessagesController < ApplicationController

  def index
    if params[:channel_id]
      @interface = Channel.find(params[:channel_id])
    elsif params[:directmessage_id]
      @interface = Directmessage.find(params[:directmessage_id])
    end

    @messages = @interface.messages
    @users = @messages.map(&:user).uniq

  end

  def create
    @message = Message.new(message_params)

    if params[:channel_id]
      @interface = Channel.find(params[:channel_id])
    elsif params[:directmessage_id]
      @interface = Directmessage.find(params[:directmessage_id])
    end

    @message.user = current_user
    @message.interface = @interface
    @message.save
    render :show

  end


  def message_params
    params.require(:message).permit(:body)
  end
end
