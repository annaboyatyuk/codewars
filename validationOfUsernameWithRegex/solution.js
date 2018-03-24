function validateUsr(username) {
  res = /^[a-z0-9_][^\s]{3,16}$/g 
  return res.test(username);
}

