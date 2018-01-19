json.directmessages do
  @directmessages.each do |room|
    json.set! room.id do
      json.partial! 'api/directmessages/directmessage', directmessage: directmessage
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