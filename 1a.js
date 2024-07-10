function translate(text) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    translatedText = "";
    
    for (i = 0; i < text.length; i++) {
        const char = text[i];
        if (consonants.includes(char)) {
            translatedText += char + "o" + char;
        } else {
            translatedText += char;
        }
    }
    
    return translatedText;
}

window.alert(translate(window.prompt("Enter a text to translate: ")));
console.log(translate(window.prompt("Enter a text to translate: ")));
