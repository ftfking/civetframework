const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const path       = require('path')
const connection = require('./connection')
const http       = require('http')
const server     = http.createServer(app)

const socketio = require('socket.io')
const io       = socketio(server)

io.on('connection',(socket) => {
	console.log('socket io activated')

	socket.on('createMessage',(message) => {
		io.emit('newMessage',{
			from: message.from,
			text: message.text
		})
	})
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./router'))

app.use(express.static(__dirname))
app.get('/',(req,res) => res.status(200).sendFile(path.join(__dirname,'public','index.html')))
app.get('*',(req,res) => res.status(404).sendFile(path.join(__dirname,'public','404.html')))

const port = process.env.PORT || 3000

server.listen(port,() => console.log(`Civetjs running at port ${port}`))
