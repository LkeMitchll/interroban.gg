var setCookie = (theme) => {
  var d
  d = new Date()
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
  var expires = `expires=${d.toUTCString()}`

  document.cookie = `theme=${theme}; ${expires}`
}

var getCookie = (cname) => {
  var name, ca
  name = `${cname}=`
  ca = document.cookie.split(';')
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

var setTheme = (theme) => {
  document.body.className = ''
  document.body.className += theme
  setCookie(theme)
}

var invertTheme = () => {
  if (getCookie('theme') == 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}

var setExistingTheme = () => {
  if (getCookie('theme')) {
    setTheme(getCookie('theme'))
  }
}

var toggleTheme = () => {
  var target
  target = document.getElementsByTagName('h1')[0]

  target.addEventListener('click', function() {
    invertTheme()
  })
}

setExistingTheme()
toggleTheme()
