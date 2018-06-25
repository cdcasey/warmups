function allCharsUnique(theString) {
    const charObj = {};
    for (const character of theString) {
        if (charObj.hasOwnProperty(character)) {
            return false;
        } else {
            charObj[character] = 1;
        }
    }
    return true;
}
