var a=parseInt(prompt("Enter Your a Value:")); 
var b=parseInt(prompt("Enter Your b Value:")); 
var c=parseInt(prompt("Enter Your c Value: ")); 


//descending order
	
	if (a>b && a>c){
		if (b>c){
			console.log(a,b,c);
	}
		else{
			console.log(a,c,b);
	}}
	else if(b>c && b>a){
			if(a>c) {
				console.log(b,a,c);
			}
			else{
				console.log(b,c,a);
	}}
	else{
		if (b>a){
		console.log(c,b,a);
	}
		else {
			console.log(c,a,b);
	}}
	
	