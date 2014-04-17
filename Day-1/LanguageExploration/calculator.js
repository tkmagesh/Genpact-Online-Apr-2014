function add(x,y){
	function parseArg(n){
		if (!isNaN(n)) return parseInt(n);
		if (typeof n === "function") return parseArg(n());
		if (Array.isArray(n)) return add.apply(this,n);
		return 0;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) :	parseArg(arguments[0]) + add([].slice.call(arguments,1));
}
