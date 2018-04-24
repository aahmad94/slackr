class Api::DirectmessagesController < ApplicationController
  def index
    @directmessage_rms = current_user.directmessages
    @users = @directmessage_rms.map(&:users).flatten.uniq
    render :index
  end

  def create
    @directmessage_rm = Directmessage.create
    @directmessage_rm.user_ids = [current_user.id, *params[:user_ids]]
    @users = [current_user.id, *params[:user_ids]].map do |user_id|
      User.find(user_id)
    end
    DirectmessageRelayJob.perform_later(@directmessage_rm, @users)
    p "----------------------------------NOW CURR USER RELAY JOB-----------------------------"
    @directmessage_rm.users.each do |user|
      CurrentUserRelayJob.perform_later(user)
    end
    render :show
  end

  def leave
    @directmessage_rm = Directmessage.find(params[:id])
    @directmessage_rm.users.delete current_user
    if @directmessage_rm.users.empty?
      @directmessage_rm.delete
    end

    unless @directmessage_rm.users.empty?
      DirectmessageRelayJob.perform_later(@directmessage_rm, @directmessage_rm.users.to_a)
    end
    CurrentUserRelayJob.perform_later(current_user)

    render json: params[:id]
  end

  def add
    @directmessage_rm = Directmessage.find(params[:directmessage_id])
    @user = User.find(params[:id])
    @directmessage_rm.users << @user
    DirectmessageRelayJob.perform_later(@directmessage_rm, @directmessage_rm.users.to_a)
    @directmessage_rm.users.each do |user|
      CurrentUserRelayJob.perform_later(user)
    end
  end

  def update_last_read
    @directmessage_rm = Directmessage.find(params[:id])
    unless @directmessage_rm.messages.empty?
      @directmessage_rm
      .dm_subscriptions
      .where(user: current_user)[0]
      .update(last_read_message_id: @directmessage_rm.messages.last.id)
      CurrentUserRelayJob.perform_later(current_user)
    end
  end

end
