// helper file to get date and time right now in JS, if needed:

var today = new Date();
var date2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date2+' '+time;
console.log(dateTime)