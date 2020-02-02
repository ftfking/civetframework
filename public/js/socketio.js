let socket = io()

socket.on('connect',() => {
	console.log('connected on server')
})

document.querySelector('#send')
.addEventListener('click',() => {
	socket.emit('createMessage',{
		from: document.querySelector('input[name=from]').value,
		text: document.querySelector('input[name=message]').value
	});
	document.querySelector('input[name=from]').value = ''
	document.querySelector('input[name=message]').value = ''
})

socket.on('newMessage', (data) => {
	document.querySelector('#messageBox')
	.innerHTML += 
	`
		${data.from} - ${data.text} <br />
	`
})