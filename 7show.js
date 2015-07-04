window.onload = function() {
	var button = document.getElementById('button');
	button.onclick = function() {
		alert('こんにちは' + document.form.name.value + 'さん');
	}
}