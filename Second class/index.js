// Expression

var a=2; 
var b=3; 
var c=5;

console.log(a+b+c);
console.log(a+c-b);
console.log(a-b-c);
console.log(a-b+c);
console.log(a*b+c);
console.log(a+b*c);
console.log(a*b*c);
console.log(-a*b+c);
console.log(a/b*c);	
console.log(a-b/c);
console.log(a+b/c);
console.log(a-c*b);
console.log(-a*c/b);
console.log(a/b/c);

//Arithemetic

var a=10;
var b=15;
var c=20;
console.log(a+b+c);
console.log(a-b-c);
console.log(a/b/c);
console.log(a%b%c);
console.log(a*b*c);
console.log(a**b**c);

// 1.pre increment 2.post increment

var a=50;
var b=100;
var c=75;

console.log(++a);
console.log(a++);
console.log(a++);
console.log(a)



//1.pre decrement 2.post decrement
console.log(--a);
console.log(a--);
console.log(a);

//comparison opertor

var a=25;
var b=40;
var c="60";

console.log(c>a);
console.log(a<b)
console.log(c<=b);
console.log(a>=b);
console.log(b==c);
console.log(b!=a);
console.log(a===b);
console.log(b!==c);

//Assignment opertor

var x=2;

console.log(x+=5);
console.log(x-=5);
console.log(x*=5);
console.log(x/=2);
console.log(x%=6);


//logical

//1.And

a=5,b=3,c=2;
console.log (a>b && a>c);
console.log (c<b && a<b);
console.log (b<c && b>c);

//2.OR

a=30;
b=10;
c=25;

console.log (a>b || a>c);
console.log (c<a || a<b);
console.log (b<c || b>c);	
console.log (b>c || a<b);

//3.NOT   
!(b>c || a<b);
!(a>b || a>c);



//Doc

var a=2; b=4; c=3;
console.log(a==b && b==c);

var a=20; b=2;
console.log((a++) + (++a) - (a+b));

var a=5; b=5;c=10;
console.log(a==b || c<b);

var a=1; b=2; c=3;
console.log((a*b) && (b*c) && (c*a));

var a=2; b=4; c=3;
console.log((a<=b) && (a%b<c));

var a=7; b=5;
console.log((a+b) && (a-b) && (a%b));

var a=2; b=3; c=4;
console.log((a<b) || (b<c) || (a<c));

var a=1; b=3; c=4;
console.log(!((a=b) && (b===c)))	;

var a=4; b=5;
console.log ((a!=b) && (a<b));

var a=10; b=5; c=20;
console.log((a<b) && (a++)<=c);

var a=29;

console.log(b=++a);
console.log(a);
console.log(--a);
console.log(++a);
console.log(--a);
console.log(b);


x=2; y=4; z=10;
console.log(!(x>y) && !(z<x) && (y<z));