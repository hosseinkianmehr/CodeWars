function pigIt(str){
  x = str.split(' ')
  var r = []
  for (let i in x){
    d = x[i].split('')
     b =x[i] + d[0]
    h = b.split('').splice(1).join('')  
    r[i] = h
    //console.log(h)
  }
  console.log(r)
  console.log(str)
  
  for (let i in r){
    if (r[i] == ('?' || '!' || '؟') ){
      r[i] = r[i]
    }
    else if (r[i] != ('?' && '!' || '؟') ){
      r[i] = r[i]+'ay'
    }
  }
  return r.join(' ')
}
