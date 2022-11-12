const isUser = (emailId, user_num) => {
    for (let i = 0; i < user_num.length; i++) {
      let email = user_num[i].email;
      // let p = user_num[i].password;
      if (email == emailId) {
        return true;
      }
    }
    return false;
  };
  
  export { isUser };