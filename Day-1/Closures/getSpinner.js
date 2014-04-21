function getSpinner(){
	var count = 0;
	return {
		up : function(){
			return ++count;
		},
		down : function(){
			return --count;
		}
	};
}

var spinner = getSpinner();
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4
spinner.up() // => 5

spinner.down() // => 4
spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


