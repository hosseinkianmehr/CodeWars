var countBits = function(n) {
  var b = 0
  var v = n.toString(2)
  v.split("").map((gd)=>{
  if (gd==1) {b++} 
  })

  return b
};
