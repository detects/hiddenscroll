
var el = document.createElement('div')
el.style.width = '100px'
el.style.height = '100px'
el.style.overflow = 'scroll'
el.style.visibility = 'hidden'

var body = document.body
body.appendChild(el)
var supported = el.offsetWidth === el.clientWidth
body.removeChild(el)

document.documentElement.className += ' ' + (supported ? '' : 'no-') + 'hiddenscroll'

export default supported
