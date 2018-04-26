json.extract! user, :id,
                    :email,
                    :displayname,
                    :img_url,
                    :dm_user_ids

json.dms_by_user_ids do
  user.direct_message_rooms.each do |dmr|
    json.set! dmr.user_ids.reject { |id| id == user.id }[0],
              dmr
  end
end

json.last_read_by_channel_ids do
  # because jbuilder bug that won't render empty hash
  json.placeholder 'placeholder'
  
  user.channels.each do |channel|
    json.set! channel.id,
              channel.channel_subscriptions.where(
                user: user
              )[0].last_read_message_id
  end
end

json.last_read_by_room_ids do
  # because jbuilder bug that won't render empty hash
  json.placeholder 'placeholder'

  user.directmessages.each do |room|
    json.set! room.id,
              room.dm_subscriptions.where(
                user: user
              )[0].last_read_message_id
  end
end