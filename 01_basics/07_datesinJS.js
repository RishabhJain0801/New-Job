//Dates

myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 26)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now(0);
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());