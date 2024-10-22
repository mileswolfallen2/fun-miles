const path = require('path').join(__dirname, '../client')
const server = require('server')(path).listen(8080)
const io = require('socket.io')(server)

const Stage = require('../engine/stage')
const { update } = Stage

const Actor = require('../engine/actor')
const { spawn, destroy, move } = Actor

const Random = require('../engine/utils/random')

const opts = require('./stage')

let stage = Stage(opts)
let seed = { value: Math.random() }

io.on('connection', socket => {

	let actor = Actor()
	let cell = [Random.int(1, 23)(seed), Random.int(1, 23)(seed)]
	spawn(actor, stage, ...cell)
	stage.actors[socket.id] = actor

	console.log(Object.keys(stage.actors).map(id => stage.actors[id].cell))

	socket.emit('stage', Stage.serialize(stage))
	socket.broadcast.emit('join', socket.id, Actor.serialize(actor))

	socket.on('move', (direction) => {
		move(actor, direction)
		socket.broadcast.emit('move', socket.id, direction)
	})

	socket.on('disconnect', () => {
		destroy(actor)
		delete stage.actors[socket.id]
		socket.broadcast.emit('leave', socket.id)
	})
})

next()

function loop () {
	update(stage)
	next()
}

function next () {
	setTimeout(loop, 1000 / 60)
}
