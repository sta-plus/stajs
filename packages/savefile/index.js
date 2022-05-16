class Savefile {
	constructor(savedata) {
		this.savedata = savedata;
	}

	// Coins

	setCoins(amount) {
		this.savedata.coins = amount;
	}

	getCoins() {
		return this.savedata.coins;
	}

	// Levels

	completeLevel(levelName) {
		this.savedata.completed[levelName] = true;
	}

	uncompleteLevel(levelName) {
		this.savedata.completed[levelName] = undefined;
	}

	isComplete(levelName) {
		if (typeof this.savedata[levelName] == "undefined") {
			return false;
		}

		return this.savedata[levelName];
	}

	// Player

	setCharacter(character) {
		this.savedata.playerChar = character;
	}

	getCharacter() {
		return this.savedata.playerChar;
	}

	// Other

	getSave() {
		return this.savedata;
	}
}

function loadFromFile(filename) {
	return new Savefile(JSON.parse(require('fs').readFileSync(filename, "utf8")));
}

function saveToFile(saveFile, filename) {
	require('fs').writeFileSync(filename, JSON.stringify(saveFile.getSave()));
}

module.exports = {
	Savefile,
	loadFromFile,
	saveToFile
};