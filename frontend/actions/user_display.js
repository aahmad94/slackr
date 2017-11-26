export const SHOW_USER_DISPLAY = 'SHOW_USER_DISPLAY';
export const HIDE_USER_DISPLAY = 'HIDE_USER_DISPLAY';

export const showUserDisplay = (userId) => ({
  type: SHOW_USER_DISPLAY,
  userId
});

export const hideUserDisplay = () => ({
  type: HIDE_USER_DISPLAY
});
