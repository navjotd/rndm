var app  = {
	kept: [],
	currentBookmark: undefined
}

function BookmarkIdArray() {}
BookmarkIdArray.prototype = Object.create(Array.prototype);
BookmarkIdArray.prototype.getRandomId = function() {
	var len = this.length;
	var index = Math.floor(Math.random() * len);
	return this[index];
}
BookmarkIdArray.prototype.removeIds = function(arr) {
	var index;
	for (var i = 0; i < arr.length; i++) {
		if ((index = this.indexOf(arr[i])) > -1) {
			this.splice(index, 1);
		}
	}
}

function depthFirstTraverse(tree, arr) {
	if (!tree.children) {
		arr.push(tree.id);
	} else {
		for (var i = 0; i < tree.children.length; i++) {
			depthFirstTraverse(tree.children[i], arr);
		}
	}
}

function setCurrentBookmark(bookmarks) {
	//check if there are no bookmarks
	//check if kept length same as flat bookmarks length
	var root = bookmarks[0].children[0];
	var flattenedBookmarks = new BookmarkIdArray();
	var newBookmarkId;
	depthFirstTraverse(root, flattenedBookmarks);
	console.log(flattenedBookmarks)
	flattenedBookmarks.removeIds(app.kept);
	newBookmardId = flattenedBookmarks.getRandomId();
	if (flattenedBookmarks.length <= 0) {
		newBookmardId = "null";
	}
	app.currentBookmark = newBookmardId;
}

// function updateKept() {
// 	chrome.storage.sync.get('kept', function(items) {
// 		if (chrome.runtime.lastError) {
// 			console.log(chrome.runtime.lasError.message);
// 		} else if (!items['kept']) {
// 			app.kept = [];
// 		} else {
// 			app.kept = items['kept'];
// 		}
// 	});
// }

// function updateCurrentBookmark() {
// 	chrome.storage.sync.get('currentBookmark', function(items) {
// 		if (chrome.runtime.lastError) {
// 			console.log(chrome.runtime.lasError.message);
// 		} else if (!items['currentBookmark']) {
// 			app.currentBookmark = undefined;
// 		} else {
// 			app.currentBookmark
// 		}
// 	});
// }

// chrome.storage.sync.get('currentBookmark', function(items) {
// 	if (chrome.runtime.lastError) {
// 		console.log(chrome.runtime.lasError.message);
// 	} else if (!items['currentBookmark']) {
// 		chrome.bookmarks.getTree(setCurrentBookmark);
// 	} else {

// 	}
// });