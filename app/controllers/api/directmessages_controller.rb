class Api::DirectmessagesController < ApplicationController
	def index
    @rooms = current_user.directmessages
    @users = @rooms.map(&:users).flatten.uniq
    render :index
  end
end
