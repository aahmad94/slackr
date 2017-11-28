class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
    return :index
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  # def update
  # end

  def add_subscriber
    @channel = Channel.find(params[:id])
    @channel.users << current_user
    render:show
    CurrentUserRelayJob.perform_later(current_user)
  end

  def remove_subscriber
    @channel = Channel.find(params[:id])
    @channel.users.delete(current_user)
    @channel.delete if @channel.users.empty?
    render json: params[:id]
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name)
  end

end
