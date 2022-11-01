function countSmileys(arr) {
  console.log(arr)
  var a= 0
let hi = arr.map((b)=>{
 var n = b.split('')
 var nf = true
 if(n.length > 3){nf = false}
 if(n.length > 2  ){
   console.log('name', n.length)
   if (!(n.includes( "-")||n.includes( "~"))){
     console.log('fuck',!(n.includes( "-")||n.includes( "~")))
     nf = false
   }
 }
 ///console.log(n.includes( ":" || ";"),n.includes( ")" || "D"))
 if(nf &&(n.includes( ":") || n.includes( ";")) && (n.includes( ")" )|| n.includes(  "D")) ){
   a++
   console.log(n)
 }
  
})
console.log(a,arr)
  return a
}
