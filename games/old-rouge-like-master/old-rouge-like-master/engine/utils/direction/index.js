const values = ['left', 'up', 'right', 'down']

const vectors = {
	left: [-1, 0],
	up: [0, -1],
	right: [1, 0],
	down: [0, 1]
}

module.exports = { values, resolve, opposite }

function opposite (direction) {
	switch (direction) {
		case 'left':
			return 'right'
		case 'up':
			return 'down'
		case 'right':
			return 'left'
		case 'down':
			return 'up'
	}
}

function resolve (direction) {
	return vectors[direction]
}
