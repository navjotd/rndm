function onStartup() {
	console.log("started up");
}

chrome.runtime.onStartup.addListener( onStartup );

chrome.app.runtime.onLaunched.addListener(function() {
  console.log('hello');
});