const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
	box.addEventListener('click', () => {
		alert('Wyryto kliknięcie!')
	})
})
