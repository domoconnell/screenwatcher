# Screen Watcher
--

Some initial restirctions mean that you must do things in the right order to test this concept.

--

### 1. Begin the node server
```
$ node server.js
``` 
execute in the root dir


### 2. Open "user page" first
Open the user page first, this is located in the user dir, called index.html.

### 3. Open the "admin panel"
The admin panel is in the admin dir and is called index.html. From here, you can launch admin "watcher" sessions.

### 4. Launch the watcher session
Click the button to "Open User Viewer". This will launch a new window the same size as your existing user window - the cursor is hidden on this page and replaced with a simulated mouse from the user page.

### 5. Test the concept
Move the mouse around on the user window, click around, click the button. Watch the events be simulated in the user watcher.
