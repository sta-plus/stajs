const { loadFromFile, saveToFile } = require('@stajs/savefile');

const filename = process.argv[2];
const coins = Number(process.argv[3]);

let saveFile = loadFromFile(filename);

saveFile.setCoins(coins);

saveToFile(saveFile, filename);