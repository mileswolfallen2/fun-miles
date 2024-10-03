module.exports = {
	width: 25,
	height: 25,
	tiles: ((width, height) => {
		let tiles = Array(width * height)
		for (let y = height; y--;) {
			for (let x = width; x--;) {
				let tile = 'floor'
				if (!x || !y || x === width - 1 || y === height - 1) {
					tile = 'wall'
				}
				tiles[y * width + x] = tile
			}
		}
		return tiles
	})(25, 25)
}
