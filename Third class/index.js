//1.if else

var a=5;

if (a>10) {
	console.log("true");
		}	
		
else {
	console.log("fasle");
		}		
		
//2.else if 

var a=prompt("enter your")

if (18<a) {
		console.log ("Eligible");
		}
		
else if (18<=a){
	console.log("Not Eligible");
}		

else {
	console.log ("Better Next Time");	
}

//nested if

var  a=12; b=17; c=31;

if (c>a && b>c) {
		
		if (b<a) {
			console.log ("true");
			}
		else {
			console.log("false");
			}
		}

else {
	console.log("ff");
}


//switch
let mark=prompt("Enter your grade")

switch (mark) {
				case"s": 
					console.log("des");
					break;
				case"a":
					console.log("first class");
					break;
				case"b":
					console.log("second class");
					break;
				case"f":
					console.log("fail");
					break;
				default:
					console.log("wrong grade");
					break;
				}

//loop
//1.while
	var a=12; 
	while (a>5) {
		
		document.write("correct")
		document.write("<br>")
			a--;
	}
	
//2.do while
	var a=10;
	do { 
		document.write("hello");
		document.write("<br>")
		a++;
		}
	while (a<=15);
	
//for
		
	for (a=12;a<=14;a++) {
		
		document.write("bala");
		document.write("<br>")
	}
	
	
	
	
	
	
	
	
	
	
	
	
	