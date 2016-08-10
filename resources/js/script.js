window.onload = function () {

	document.getElementById('add').addEventListener('click', function (e) {
		e.preventDefault();

		var value = document.getElementById('item').value;

		if (value) {
			addItemTodo(value);
		} 
		
	});

	function addItemTodo(text) {
		
		var item = document.createElement("li");

		item.innerText = text;

	}

}
