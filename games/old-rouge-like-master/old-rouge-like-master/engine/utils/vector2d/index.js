module.exports = Vector2D
Vector2D.add = add

function Vector2D (x, y) {
	return [x, y]
}

function add ([x1, y1], [x2, y2]) {
	return [x1 + x2, y1 + y2]
}
