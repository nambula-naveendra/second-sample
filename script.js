import winston from {winston};


var Name,gmail,Phone;

document.getElementById("Name").addEventListener("change",function(x){
  Name = x.target.value;
});

document.getElementById("Email-1").addEventListener("change",function(y){
  gmail = y.target.value;
});

document.getElementById("Mobile").addEventListener("change",function(z){
  Phone = z.target.value;
});

document.getElementById("butt").addEventListener('click',function(){  
    console.log(Name);
    console.log(gmail);
    console.log(Phone);   
    document.getElementById("myForm").reset();
      

});

var toEmail, fromEmail, sub, body;

document.getElementById("ToEmail").addEventListener("change",function(a){
  toEmail = a.target.value;

});

document.getElementById("FromEmail").addEventListener("change",function(b){
  fromEmail = b.target.value;
});

document.getElementById("Subject").addEventListener("change",function(c){
  sub = c.target.value;
});

document.getElementById("Body").addEventListener("change",function(d){
  body = d.target.value;

});

document.getElementById("buto").addEventListener("click",function(){
  console.log(toEmail);
  console.log(fromEmail);
  console.log("Mailsent");
  document.getElementById("form-2").reset();
});

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};