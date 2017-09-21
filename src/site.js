function setCookie(theme) {
  var d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  var expires = `expires=${d.toUTCString()}`;

  document.cookie = `theme=${theme}; ${expires}`;
}

function getCookie(cname) {
  var name = `${cname}=`;
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setTheme(theme) {
  document.body.className = "";
  document.body.className += theme;
  setCookie(theme);
}

function invertTheme() {
  if (getCookie("theme") == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function setExistingTheme() {
  if (getCookie("theme")) {
    setTheme(getCookie("theme"));
  }
}

function toggleTheme() {
  var target = document.getElementsByTagName('h1')[0]

  target.addEventListener('click', function() {
    invertTheme();
  })
}

setExistingTheme();
toggleTheme();
