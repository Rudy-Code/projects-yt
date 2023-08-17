const btns = document.querySelectorAll('.btn')

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

const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
	box.addEventListener('click', e => {
		alert('Kliknięto!')
	})
})
