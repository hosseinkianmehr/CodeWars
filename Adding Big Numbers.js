function add(a, b) {
  var c = a.split('')
  var v = b.split('')
  var n = ''
  var y = false
 
  for (let i = a.split('').length; i > 14; i= i-14) {
    var f = (Number(c.slice(-14).join('')) + Number(v.slice(-14).join('')) +(y?1:0)).toString()  
    if(f.split('').length >= 15){n =f.split('').slice(1).join('')+ n
                                y=true
                                }else{
                                  y = false;
                                 n = f + n
                                }
  // console.log('nnn', (Number(c.slice(-14).join('')) + Number(v.slice(-14).join(''))).toString())
    c = c.slice(0, c.length -14 )
    v = v.slice(0, v.length -14 )
    
}
  n = (Number(c.join('')) + Number(v.join(''))+(y?1:0)).toString() +n
  console.log(a)
  console.log(b)
   console.log(n)
  return n
}
