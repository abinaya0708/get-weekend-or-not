let today=new Date();
console.log(today);



let day=today.getDay();
console.log(day);


document.write("Find today is Weekend or not:---"+"<br>");

if(day==0||day==6){
	console.log("Today is Weekend");
	
	document.write("Today is Weekend"+"<br>");
	
}
else{
	console.log("Today is not Weekend");
	
	document.write("Today is not Weekend"+"<br>");
}
