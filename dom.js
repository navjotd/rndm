var dom = (function(){
	return {
		setTitle: function(newTitle) {
			$('#bookmarkTitle').html(newTitle);
		},
		setBreadcrumb: function(ancestorArr) {
			var breadcrumbStr = "";
			for (var i = 0; i < ancestorArr.length; i++) {
				breadcrumbStr += ancestorArr[i];
				if (i !== ancestorArr.length - 1) {
					breadcrumbStr += " > "
				}
			}
			$('#bookmarkBreadcrumb').html(breadcrumbStr);
		},
		setUrl: function(url) {
			$('#bookmarkUrl').html(url);
		}
	};
})();