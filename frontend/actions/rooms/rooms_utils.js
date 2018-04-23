export const fetchRoomsAndUsers = () => (
  $.ajax({
    url: `/api/directmessages`
  })
);

export const createRoom = (userIds) => (
  $.ajax({
    url: `/api/directmessages`,
    method: 'POST',
    data: { userIds }
  })
);

export const leaveRoom = roomId => (
  $.ajax({
    url: `api/directmessages/leave/${roomId}`,
    method: 'DELETE'
  })
);

export const addUser = (roomId, userId) => (
  $.ajax({
    url: `/api/directmessages/${roomId}/add/${userId}`,
    method: 'POST'
  })
);

export const updateLastRead = roomId => (
  $.ajax({
    url: `/api/directmessages/update_last_read/${roomId}`,
    method: 'PATCH'
  })
);
