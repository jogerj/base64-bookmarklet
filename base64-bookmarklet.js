javascript:(
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

function decode( str ) {
  str = str.replaceAll('=','').replaceAll(/\s+/g, '');
  return decodeURIComponent((window.atob( str )));
}

function hash( choice, text ) {
  if (choice) {
    return encode(text);
  } else {
    return decode(text);
  }
}

try {
	var text = getSelectionText();
	var choice = window.confirm("Press OK to encode to base64.\nPress CANCEL to decode from base64");
    do {
		text = hash(choice, text);
	} while(window.prompt("Press CTRL-C to copy\nPress ESC/Click CANCEL to close\nPress ENTER/Click OK to " + (choice ? "encode" : "decode") + " again", text));
} catch(e) {
	if (!choice) {
		window.alert('Failed to decode! Not a valid Base64!\n')
	} else {
		window.alert(e)
	}
})