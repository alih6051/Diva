// Admin Validate Function
const isAdmin = (username, password, admin_users) => {
  for (let i = 0; i < admin_users.length; i++) {
    let u = admin_users[i].username;
    let p = admin_users[i].password;
    if (u == username && p == password) {
      return true;
    }
  }
  return false;
};

export { isAdmin };
