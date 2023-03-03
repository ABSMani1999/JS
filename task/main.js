var a=parseInt("5");
var b=5;

	document.write(a+b);

var a=20;
var b="welcome";

	document.write(isNaN(a));//false
	document.write("<br>")
	document.write(isNaN(b)); //true
	document.write("<br>");
	document.write("<br>");
var a=10;
var b=12.24;

	document.write(Number.isInteger(a));
	document.write("<br>");							
	document.write(Number.isInteger(b));

// array 
var n=[12,343,454,46];

	document.write(n);
	document.write("<br>");
	document.write(n[2]);
	document.write("<br>");
	document.write(n[3]=5);
	document.write("<br>");
  n.push(100);
	document.write(n);
	document.write("<br>");
	document.write("<br>");
//for loop

for (a=0;a<n.length;a++) {
	document.write(n[a]);
	document.write("<br>");
}
document.write("<br>");
document.write("<br>");

var n=[[1,2,3],[5,6,7]];

	document.write(n[0][0]);
	document.write("<br>")
	document.write(n[0][1]);
	document.write("<br>")
	document.write(n[0][2]);
	document.write("<br>")
	document.write(n[1][0]);
	document.write("<br>")
	document.write(n[1][1]);
	document.write("<br>")
	document.write(n[1][2]);
	document.write("<br>");
	document.write("<br>");
	
for (i=0;i<n.length;i++) {
	for (j=0;j<n[i].length;j++) {
	 document.write(n[i][j])
	 }
 }
document.write("<br>");
document.write("<br>");
 
//sum & Avarage
var n=[1,2,3,4,5,6];

function sum (n){
var total=0;
var count=0;
	for (i=0;i<n.length;i++) {
		total=total+n[i];
		count++;
				}
	return total/count;
} 
document.write(sum(n));
document.write("<br>");
document.write("<br>");
		
//even number		
var n=[12,24,23,52,79,15,46];

	for (a=0;a<n.length;a++) {
		if (n[a]%2==0) {
			document.write(n[a]);
		} 
 } 
 document.write("<br>");
 document.write("<br>");

//odd number & count & function	
	
var n=[12,24,23,52,79,15,46];

function odd (n){								
	 var count=0;
 for (a=0;a<n.length;a++) {
	
	 if (n[a]%2==1) {
		 count++;
	 } 
 }return count;		
} console.log (odd(n));
 
 
 
 
		
