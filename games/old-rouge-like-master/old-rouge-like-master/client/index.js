const socket = require('socket.io-client/dist/socket.io.min.js')()

const Stage = require('../engine/stage')
const { update } = Stage

const Actor = require('../engine/actor')
const { spawn, destroy, move } = Actor

const render = require('./render')

const controls = {
	ArrowLeft: 'left',
	ArrowUp: 'up',
	ArrowRight: 'right',
	ArrowDown: 'down',
	KeyA: 'left',
	KeyW: 'up',
	KeyD: 'right',
	KeyS: 'down'
}

let stage
let actor
let canvas

socket.on('stage', (data) => {
	let opts = Stage.parse(data)
	stage = Stage(opts)
	actor = stage.actors[socket.id]
	if (canvas) {
		document.body.removeChild(canvas)
	}
	canvas = render(stage, socket.id)
	document.body.appendChild(canvas)
	window.addEventListener('keydown', function respond (event) {
		let direction = controls[event.code]
		if (direction) {
			move(actor, direction)
			socket.emit('move', direction)
		}
	})
	next()
})

socket.on('join', (id, data) => {
	let opts = Actor.parse(data)
	let actor = Actor(opts)
	actor.stage = stage
	stage.actors[id] = actor
})

socket.on('leave', (id) => {
	let actor = stage.actors[id]
	if (actor) {
		destroy(actor)
		delete stage.actors[id]
	}
})

socket.on('move', (id, direction) => {
	let actor = stage.actors[id]
	if (actor) {
		move(actor, direction)
	}
})

function tick () {
	update(stage)
	render(stage, socket.id, canvas)
	next()
}

function next () {
	requestAnimationFrame(tick)
}
