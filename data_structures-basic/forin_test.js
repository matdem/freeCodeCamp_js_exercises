const users = {
  Alan: {
    online: true,
  },
  Jeff: {
    online: false,
  },
  Sarah: {
    online: true,
  },
};

function countOnline(usersObj) {
  let nbOnlineUsers = 0;
  for (let user in usersObj) {
    /* REALLY IMPORTANT to use bracket syntax to acces the "online" property */
    if (usersObj[user].online === true) {
      nbOnlineUsers += 1;
    }
  }
  return nbOnlineUsers;
}

console.log(countOnline(users));
console.log(users.Alan.online);
