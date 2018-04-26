json.rooms do
  @directmessage_rms.each do |directmessage_rm|
    json.set! directmessage_rm.id do
      json.partial! 'api/directmessages/directmessage', directmessage_rm: directmessage_rm
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end 