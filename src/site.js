function invert() {
  if (document.body.className) {
    document.body.className = "";
  } else {
    document.body.className += "invert";
  }
}

var target = document.getElementsByTagName('h1')[0]

target.addEventListener('click', function() {
  invert();
})
