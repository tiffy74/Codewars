function likes (names) {
    var namesLength = names.length;
    var moreThanTwo = names.length - 2; 

    if (namesLength === 1) {
        return names[0] + ' likes this'
    } else if (namesLength === 2) {
        return names[0] + ' and ' + names[1] + ' like this';
    } else if (namesLength === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    } else if (namesLength >= 4) {
        return names[0] + ', ' + names[1] + ' and ' +  moreThanTwo + ' others like this'
    }
    return 'no one likes this'
}
