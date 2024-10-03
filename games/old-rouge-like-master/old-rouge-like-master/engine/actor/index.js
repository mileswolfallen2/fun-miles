module.exports = Actor
Actor.serialize = serialize
Actor.parse = parse
Actor.spawn = spawn
Actor.destroy = destroy
Actor.move = move

const Stage = require('../stage')
const { at } = Stage

const Direction = require('../utils/direction')
const { resolve } = Direction

const Vector2D = require('../utils/vector2d')
const { add } = Vector2D

function Actor (opts) {
	let actor = {
		stage: null,
		cell: null
	}
	Object.assign(actor, opts)
	return actor
}

function serialize (actor) {
	return actor.cell.toString()
}

function parse (data) {
	return Actor({ cell: data.split(',').map(Number) })
}

function spawn (actor, stage, x, y) {
	actor.stage = stage
	actor.cell = [x, y]
	return true
}

function destroy (actor) {
	actor.stage = null
	actor.cell = null
	return true
}

function move (actor, direction) {
	let delta = resolve(direction)
	if (delta) {
		let target = add(actor.cell, delta)
		if (at(actor.stage, ...target) === 'floor') {
			actor.cell = target
			return true
		}
	}
	return false
}
