window.onload = function () {
	
	// document.getElementById('add').onclick;

	document.getElementById('add').addEventListener('click', function (e) {
		e.preventDefault();

		var value = document.getElementById('item').value;

		if (value) {
			console.log(value);	
		} 
		
	})

}
