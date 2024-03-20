function encrypt() {
    var text = document.getElementById("inputText").value;
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        switch(text[i]) {
            case 'e':
                encryptedText += "enter";
                break;
            case 'i':
                encryptedText += "imes";
                break;
            case 'a':
                encryptedText += "ai";
                break;
            case 'o':
                encryptedText += "ober";
                break;
            case 'u':
                encryptedText += "ufat";
                break;
            default:
                encryptedText += text[i];
        }
    }
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    var text = document.getElementById("inputText").value;

    // Definir las claves encryptadas
    var patterns = {
        'enter': /enter/g,
        'imes': /imes/g,
        'ai': /ai/g,
        'ober': /ober/g,
        'ufat': /ufat/g
    };

    // Remplazar las claves por letras
    for (var pattern in patterns) {
        if (patterns.hasOwnProperty(pattern)) {
            text = text.replace(patterns[pattern], pattern.charAt(0));
        }
    }

    document.getElementById("outputText").value = text;
}






function copyToClipboard() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Copied to clipboard: " + outputText.value);
}
