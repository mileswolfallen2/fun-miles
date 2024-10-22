module.exports = render

const Stage = require('../engine/stage')
const { at } = Stage

const colors = {
	floor: 'black',
	wall: 'white',
	hero: 'lime',
	enemy: 'red'
}

function render (stage, me, canvas) {
	if (!canvas) {
		canvas = document.createElement('canvas')
	}
	canvas.width = stage.width
	canvas.height = stage.height
	let context = canvas.getContext('2d')
	for (let y = stage.height; y--;) {
		for (let x = stage.width; x--;) {
			context.fillStyle = colors[at(stage, x, y)]
			context.fillRect(x, y, 1, 1)
		}
	}
	for (let id in stage.actors) {
		let actor = stage.actors[id]
		let [x, y] = actor.cell
		if (id === me) {
			context.fillStyle = colors.hero
		} else {
			context.fillStyle = colors.enemy
		}
		context.fillRect(x, y, 1, 1)
	}
	return canvas
}
