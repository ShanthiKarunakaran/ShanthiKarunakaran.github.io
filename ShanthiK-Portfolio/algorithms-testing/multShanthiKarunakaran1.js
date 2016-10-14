function multShanthiKarunakaran1(times) {
	//add all number that are less than times into an array
	var lookUp = {};
	while(times > 1) {
		times--;
		if(times % 3 == 0 || times % 5 == 0) {
			lookUp[times] = "true";
		}
	}
	// 3,5,6,9 (prev :0 , 3 , 8 , 14 , 23)
	return Object.keys(lookUp).reduce(function (previous, key) {
		 //if string no conversion , else convert the number stored as string to the data type number
    	key = isNaN(key) ? key : Number(key);
		return previous + key;
	}, 0);
}


multShanthiKarunakaran1(10);
module.exports = multShanthiKarunakaran1;


