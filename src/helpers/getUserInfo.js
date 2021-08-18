export const getUserId = () => {
    let user;
    let activeUserId;

    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        activeUserId = user.id;
    } else {
        null;
    }

    return activeUserId;
};

export const getUsername = () => {
    let user;
    let username;

    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        username = user.username;
    } else {
        null;
    }

    return username;
};