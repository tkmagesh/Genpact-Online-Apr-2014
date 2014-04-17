var products = [
	{id : 1, name : "pen", cost : 40, units : 10, category : 2},
	{id : 5, name : "hen", cost : 10, units : 50, category : 1},
	{id : 2, name : "den", cost : 20, units : 20, category : 2},
	{id : 7, name : "len", cost : 40, units : 80, category : 1},
	{id : 3, name : "ten", cost : 60, units : 30, category : 2},
	{id : 9, name : "zen", cost : 20, units : 40, category : 1}
]

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function sort(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function sort(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function productComparerByValue(p1,p2){
	var p1Value = p1.cost * p1.units,
		p2Value = p2.cost * p2.units;
	if (p1Value > p2Value) return 1;
	if (p1Value === p2Value) return 0;
	return -1;
}

function min(list,attrName){
	var result =list[0][attrName];
	for(var i=1;i<list.length;i++){
		var val = list[i][attrName];
		if (result > val) result = val;
	}
	return result;
}

function max(list,attrName){
	var result =list[0][attrName];
	for(var i=1;i<list.length;i++){
		var val = list[i][attrName];
		if (result < val) result = val;
	}
	return result;
}

/*Convert the min and max functions that will take a function as a second argument*/

function countBy(list,criteriaFn /*predicate*/){
	var result  =0;
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i])) result++;
	return result;
}

function filter(list,criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i])) result.push(list[i]);
	return result;
}

function groupBy(list,attrName){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = list[i][attrName];
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

function groupBy(list,keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

function join(leftList, rightList, leftKeyName, rightKeyName, transformerFn){
	var result = [];
	for(var i=0;i<leftList.length;i++)
		for(var j=0;j<rightList.length;j++){
			var leftItem = leftList[i]
				,rightItem = rightList[j]
				,leftKey = leftItem[leftKeyName]
				,rightKey = rightItem[rightKeyName];
			if (leftKey === rightKey){
				result.push(transformerFn(leftItem,rightItem));
			}

		}
	return result;
}

var productListWithCategoryName = join(products,categories,"category","id",function(p,c){
    return {id : p.id, name :p.name, cost : p.cost, units : p.units, category : c.name };
});