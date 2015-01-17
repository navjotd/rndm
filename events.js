function setDomBookmark(arr) {
	var bookmark = arr[0];
	var parent = bookmark.parentId;
	var ancestors = []
	if (parent) {
		chrome.bookmarks.get(parent, function(arr) {
			ancestors.push(arr[0].title);
			parent = parent.parentId;
			if (!parent) {
				dom.setTitle(bookmark.title);
				dom.setUrl(bookmark.url);
				dom.setBreadcrumb(ancestors);
			} else {
				chrome.bookmarks.get
			}
		})
	}
}

function onKeep() {
	app.kept.push(app.currentBookmark);
	chrome.bookmarks.getTree(setCurrentBookmark);
	chrome.bookmark.get(app.currentBookmark, setDomBookmark);
}

function onDelete() {

}

function onNew() {

}

$('#keep').click(onKeep);
$('#delete').click(onDelete);
$('#new').click(onNew);