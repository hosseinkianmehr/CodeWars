function arrayDiff(a, b) {
  var m = a
  b.map((v)=>{
  m = m.filter( f=> f != v )
  })
  console.log(m, 'num')
   console.log(a,b)
  return m

}
