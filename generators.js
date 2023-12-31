function randomInt(max, min) {
    if (!min) min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateID(length) {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    var password = '';
    for (let i = 0; i < length ?? 32; i++) {
        password += alphabet[randomInt(alphabet.length)];
    }
    return password;
}

function generateGarbage() {
    if (config.disableGarbage) return '';
    return generateID(randomInt(8, 128));
}

module.exports = {
    generateID,
    generateGarbage,
    randomInt
};