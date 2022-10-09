function humanReadable (seconds) {
  //for(var i= seconds;i>60)
  var hu = "00"
  var min = "00"
  var x = seconds % 60
  var y = seconds / 60
  if (y>=1){
     min = y %60
    if(y>=60){
       hu =y/60
    }
  }
  
  var p = 00
  x<10 ? p = "0"+x : p = x
  
  var m
if(min == '00'|| min == 0){m= '00'}else{ if(min<10){
  m = "0" +parseInt(min) }else{m = parseInt(min)} }
  
var h
if(hu == '00'|| hu == 0){h= "00"}else{ if(hu<10){
  h = "0" +parseInt(hu) }else{h = parseInt(hu)} }
  
  console.log(seconds ,(h+':'+ m +':'+ p), min ,y)
  return h+':'+ m +':'+ p;
}
