var jp;
if (!jp) {
	jp = {};
}
if (!jp.learnyourself) {
	jp.learnyourself = {};
}

jp.learnyourself.AbstractStringSplitter =
	function(str, separator) {
		if(!str || str.length == 0) {
			throw new Error('strは指定');
		}
		this.str = str;
		this.separator = separator;
		this.pos = -1;
	};
	jp.learnyourself.AbstractStringSplitter.prototype.getArray
		= function() {
			return this.str.split(this.separator);
		};
	jp.learnyourself.AbstractStringSplitter.prototype.getNext
		= function() {
			if (!this.arr) {
				this.arr = this.getArray();
			}	
		this.pos += 1;
	if(this.pos >= this.arr.length) {
		this.pos = -1;
		return null;
	}
	return this.arr[this.pos];
};

jp.learnyourself.SlashStringSplitter = function(str) {
	jp.learnyourself.AbstractStringSplitter.apply(this, [str, '/'])
};

with (jp.learnyourself) {
	SlashStringSplitter.prototype = new AbstractStringSplitter('temp', '/');
	delete SlashStringSplitter.prototype.str;
	delete SlashStringSplitter.prototype.separator;
	delete SlashStringSplitter.prototype.arr;
	delete SlashStringSplitter.prototype.pos;
	SlashStringSplitter.prototype.constructor = SlashStringSplitter;
}