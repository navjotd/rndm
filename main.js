function randomBookmarkOpener(bookmarks) {
	var flattenedBookmarks = [];
	var root = bookmarks[0].children[0];

	function flattenBookmarks(tree) {
		if (!tree.children) {
			flattenedBookmarks.push(tree.url);
		} else {
			for (var i = 0; i < tree.children.length; i++) {
				flattenBookmarks(tree.children[i]);
			}
		}
	}

	flattenBookmarks(root);
	var num = flattenedBookmarks.length;
	var index = Math.floor(Math.random() * num);
	window.open(flattenedBookmarks[index].url, "_self");
}

chrome.bookmarks.getTree(randomBookmarkOpener);