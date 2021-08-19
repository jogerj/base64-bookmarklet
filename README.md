# base64-bookmarklet
Convert from and to Base64 with a simple JS bookmarklet. No external scripts, no extensions/plugins required.

## Usage
1. Select text to convert within the page.
2. Click on the bookmarklet.
3. A pop-up message will show the converted Base64 text. Use CTRL-C to copy the text.
4. Paste the text somewhere else.

## Installation
1. Copy this script (if you'd like to have just one bookmarks)	
    ```javascript
    javascript:(function()%7Bfunction%20getSelectionText()%7Bvar%20a%3D%22%22%2Cb%3Ddocument.activeElement%2Cc%3Db%3Fb.tagName.toLowerCase()%3Anull%3Breturn%22textarea%22%3D%3Dc%7C%7C%22input%22%3D%3Dc%26%26%2F%5E(%3F%3Atext%7Csearch%7Cpassword%7Ctel%7Curl)%24%2Fi.test(b.type)%26%26%22number%22%3D%3Dtypeof%20b.selectionStart%3Fa%3Db.value.slice(b.selectionStart%2Cb.selectionEnd)%3Awindow.getSelection%26%26(a%3Dwindow.getSelection().toString())%2Ca%7Dfunction%20encode(a)%7Breturn%20window.btoa(encodeURIComponent(a).replace(%2F%25(%5B0-9A-F%5D%7B2%7D)%2Fg%2Cfunction(a%2Cb)%7Breturn%20String.fromCharCode(%220x%22%2Bb)%7D))%7Dfunction%20decode(a)%7Breturn%20a%3Da.replaceAll(%22%3D%22%2C%22%22).replaceAll(%2F%5Cs%2B%2Fg%2C%22%22)%2CdecodeURIComponent(window.atob(a))%7Dfunction%20hash(a%2Cb)%7Breturn%20a%3Fencode(b)%3Adecode(b)%7Dtry%7Bvar%20text%3DgetSelectionText()%2Cchoice%3Dwindow.confirm(%22Press%20OK%20to%20encode%20to%20base64.%5CnPress%20CANCEL%20to%20decode%20from%20base64%22)%3Bdo%20text%3Dhash(choice%2Ctext)%3Bwhile(window.prompt(%22Press%20CTRL-C%20to%20copy%5CnPress%20ESC%2FClick%20CANCEL%20to%20close%5CnPress%20ENTER%2FClick%20OK%20to%20%22%2B(choice%3F%22encode%22%3A%22decode%22)%2B%22%20again%22%2Ctext))%7Dcatch(a)%7Bchoice%3Fwindow.alert(a)%3Awindow.alert(%22Failed%20to%20decode!%20Not%20a%20valid%20Base64!%5Cn%22)%7D%7D)()%3B
    ```
    -- OR --
    
    Copy both of these scripts if you want separate bookmarks:
    
    Decode:
      ```javascript
      javascript:(function()%7Bfunction%20getSelectionText()%7Bvar%20a%3D%22%22%2Cb%3Ddocument.activeElement%2Cc%3Db%3Fb.tagName.toLowerCase()%3Anull%3Breturn%22textarea%22%3D%3Dc%7C%7C%22input%22%3D%3Dc%26%26%2F%5E(%3F%3Atext%7Csearch%7Cpassword%7Ctel%7Curl)%24%2Fi.test(b.type)%26%26%22number%22%3D%3Dtypeof%20b.selectionStart%3Fa%3Db.value.slice(b.selectionStart%2Cb.selectionEnd)%3Awindow.getSelection%26%26(a%3Dwindow.getSelection().toString())%2Ca%7Dfunction%20decode(a)%7Breturn%20a%3Da.replaceAll(%22%3D%22%2C%22%22).replaceAll(%2F%5Cs%2B%2Fg%2C%22%22)%2CdecodeURIComponent(window.atob(a))%7Dtry%7Bvar%20text%3DgetSelectionText()%3Bdo%20text%3Ddecode(text)%3Bwhile(window.prompt(%22Press%20CTRL-C%20to%20copy%5CnPress%20ESC%2FClick%20CANCEL%20to%20close%5CnPress%20ENTER%2FClick%20OK%20to%20decode%20again%22%2Ctext))%7Dcatch(a)%7Bwindow.alert(%22Failed%20to%20decode!%20Not%20a%20valid%20Base64!%22)%2Cconsole.log(a)%7D%7D)()%3B
      ```
    Encode:
      ```javascript
      javascript:(function()%7Bfunction%20getSelectionText()%7Bvar%20a%3D%22%22%2Cb%3Ddocument.activeElement%2Cc%3Db%3Fb.tagName.toLowerCase()%3Anull%3Breturn%22textarea%22%3D%3Dc%7C%7C%22input%22%3D%3Dc%26%26%2F%5E(%3F%3Atext%7Csearch%7Cpassword%7Ctel%7Curl)%24%2Fi.test(b.type)%26%26%22number%22%3D%3Dtypeof%20b.selectionStart%3Fa%3Db.value.slice(b.selectionStart%2Cb.selectionEnd)%3Awindow.getSelection%26%26(a%3Dwindow.getSelection().toString())%2Ca%7Dfunction%20encode(a)%7Breturn%20window.btoa(encodeURIComponent(a).replace(%2F%25(%5B0-9A-F%5D%7B2%7D)%2Fg%2Cfunction(a%2Cb)%7Breturn%20String.fromCharCode(%220x%22%2Bb)%7D))%7Dtry%7Bvar%20text%3DgetSelectionText()%3Bdo%20text%3Dencode(text)%3Bwhile(window.prompt(%22Press%20CTRL-C%20to%20copy%5CnPress%20ESC%2FClick%20CANCEL%20to%20close%5CnPress%20ENTER%2FClick%20OK%20to%20encode%20again%22%2Ctext))%7Dcatch(a)%7Bconsole.log(a)%7D%7D)()%3B
      ```
2. Create a new bookmark
   - Use any name you desire e.g. `Convert Base64`
   - Paste the code in the URL field 
3. Test the bookmarklet
   Select some text and click on the bookmarklet.
   
   
## Sources
- https://developer.mozilla.org/en-US/docs/Glossary/Base64
- https://stackoverflow.com/a/5379408
- https://caiorss.github.io/bookmarklet-maker/
