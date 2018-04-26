class Api::UsersController < ApplicationController

  def index
    @channel = Channel.find(params[:channel_id])
    if @channel
      @users = @channel.users
    end
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    @users = User.search params[:query]
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :displayname, :password)
  end
end
