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

function decode( str ) {
  str = str.replaceAll('=','').replaceAll(/\s+/g, '');
  return decodeURIComponent((window.atob( str )));
}

try {
	var text = getSelectionText();
  do {
		text = decode(text);
	} while(window.prompt("Press CTRL-C to copy\nPress ESC/Click CANCEL to close\nPress ENTER/Click OK to decode again", text));
} catch(e) {
	window.alert('Failed to decode! Not a valid Base64!');
	console.log(e);
}