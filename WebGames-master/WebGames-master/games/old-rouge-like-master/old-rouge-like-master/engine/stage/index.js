module.exports = Stage
Stage.serialize = serialize
Stage.parse = parse
Stage.contains = contains
Stage.at = at
Stage.update = update

const Actor = require('../actor')

function Stage (opts) {
	let stage = {
		width: null,
		height: null,
		tiles: null,
		actors: {}
	}
	Object.assign(stage, opts)
	return stage
}

function serialize (stage) {
	return JSON.stringify({
		width: stage.width,
		height: stage.height,
		tiles: stage.tiles,
		actors: Object.keys(stage.actors).reduce((actors, id) => {
			actors[id] = Actor.serialize(stage.actors[id])
			return actors
		}, {})
	})
}

function parse (data) {
	let opts = JSON.parse(data)
	let stage = Stage(opts)
	stage.actors = Object.keys(stage.actors).reduce((actors, id) => {
		let actor = Actor.parse(opts.actors[id])
		actor.stage = stage
		actors[id] = actor
		return actors
	}, {})
	return stage
}

function contains (stage, x, y) {
	return x >= 0 && y >= 0 && x < stage.width && y < stage.height
}

function at (stage, x, y) {
	if (contains(stage, x, y)) {
		return stage.tiles[y * stage.width + x]
	}
}

function update (stage) {
	// for (let id in stage.actors) {
	// 	let actor = stage.actors[id]
	// 	// ...
	// }
}
