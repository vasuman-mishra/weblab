function pluralize(noun, number) {
    const specialNouns = {
        sheep: 'sheep',
        goose: 'geese',
        person: 'people',
        mouse: 'mice'
    };

    if (number === 1) {
        return `${number} ${noun}`;
    } else if (specialNouns[noun]) {
        return `${number} ${specialNouns[noun]}`;
    } else {
        return `${number} ${noun}s`;
    }
}

a=window.prompt('Enter a noun');
b=window.prompt('Enter a number');
window.alert(pluralize(a,parseInt(b)));
