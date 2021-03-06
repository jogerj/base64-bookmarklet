function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
};

function encode( str ) {
  return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
};

try {
	var text = getSelectionText();
	if (!text) {
		// prompt for text if empty
		text = window.prompt("Enter the text you would like to convert:");
	}
	do {
		text = encode(text);
	} while(window.prompt("Press CTRL-C to copy\nPress ESC/Click CANCEL to close\nPress ENTER/Click OK to encode again", text));
} catch(e) {
	console.log(e);
}