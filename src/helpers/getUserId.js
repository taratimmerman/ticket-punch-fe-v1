const getUser = JSON.parse(localStorage.getItem('user'));

export const activeUserId = getUser.id;