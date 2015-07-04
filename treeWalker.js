var tw = document.createTreeWalker(document,
	NodeFilter.SHOW_ELEMENT,
	function(node){
		if(node.className == 'abc'){
			return NodeFilter.FILTER_ACCEPT;
		} else {
			return NodeFilter.FILTER_SKIP;
		}
	},
	false);