var app = (function(){

	//private variables and methods
	var keptBookmarks = [];
	var currentBookmark = undefined;

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

	function getBookmarkAncestorArr(bookmark) {
		 
	}

	function initState = function() {

	}

	//public variables and methods

	return {

	};
})();