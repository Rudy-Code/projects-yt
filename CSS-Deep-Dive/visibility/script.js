const btns = document.querySelectorAll('.btn')
const boxes = document.querySelectorAll('.box')
const h1 = document.querySelector('h1')

const showHideBox = e => {
	const value = e.target.value
	const box = e.target.previousElementSibling.previousElementSibling

	if (e.target.value == 'visibility: hidden')
		box.style.visibility === 'hidden' ? (box.style = 'visibility: visible;') : (box.style = value)
	else if (e.target.value == 'display: none')
		box.style.display === 'none' ? (box.style = 'display: flex') : (box.style = value)
	else if (e.target.value == 'opacity: 0') box.style.opacity === '0' ? (box.style = 'opacity: 1') : (box.style = value)
}

btns.forEach(btn => {
	btn.addEventListener('click', showHideBox)
})

boxes.forEach(box => {
	box.addEventListener('click', () => {
		h1.textContent = 'Kliknięto w box'
		setTimeout(() => {
			h1.textContent = '-'
		}, 1500)
	})
})

/* cursor event*/

document.addEventListener('click', () => applyCursorRippleEffect(event))

function applyCursorRippleEffect(e) {
	const ripple = document.createElement('div')

	ripple.className = 'ripple'
	document.body.appendChild(ripple)

	ripple.style.left = `${e.clientX}px`
	ripple.style.top = `${e.clientY}px`
	ripple.style.animation = `ripple-effect .4s  linear`
	ripple.onanimationend = () => {
		document.body.removeChild(ripple)
	}
}
