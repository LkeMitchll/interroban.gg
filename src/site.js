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

var generateRandomIntegerBetween = (min, max) => ( Math.floor(max - Math.random() * (max - min)) )

const times = i => f => {
  if (i > 0) {
    f()
    times (i - 1) (f)
  }
}

var generateLine = (string) => {
  var line, rand
  line = ''
  rand = generateRandomIntegerBetween(5, 15)

  times (rand) (() => line += string)
  line += '<br>'

  return line
}

var assembleLines = (targets) => {
  for (var target of targets) {
    var contents
    contents = ''

    times (5) (() => contents += generateLine('! ? '))
    target.innerHTML += `<p><em> ${contents} </em></p>`
  }
}

var lineTargets = document.getElementsByClassName('ascii')
assembleLines(lineTargets)
