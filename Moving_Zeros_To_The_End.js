var moveZeros = function (arr) {
  v=0
  arr.map(k => k === 0 ? v++ : v)
  n = []
  for (let j=0 ; j<arr.length ;j++){
     //console.log(j)
    if (arr[j]===0){
     console.log(0)
    }else{n.push(arr[j])}
  }
  for (let i=0 ; i<v ;i++){
     n.push(0)
  }
  return n
}
