function register() {
  user = document.getElementById('user').value
  pass = document.getElementById('pass').value
  pass2 = document.getElementById('pass2').value
  if (user.length < 6 || user.length > 10 || pass.length < 6 || pass.length > 10 || pass !== pass2
      || isNaN(parseInt(user[0])) == false) {
      alert("Invalid Username or Password")
  } else if ((/[\W]/).test(user) || (/[_]/).test(user) ||
            (/[\W]/).test(pass) || (/[_]/).test(pass) ||
            (/[A-Z]/).test(pass) == false || (/[a-z]/).test(pass) == false
            || (/[\d]/).test(pass) == false || (/[\d]/).test(user) == false){
      alert("Invalid Username or Password")
  } else {
      alert("User Validated!")
  }

  document.getElementById('user').value = ""
  document.getElementById('pass').value = ""
  document.getElementById('pass2').value = ""

}
