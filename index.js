
function iterativeLog(array) {
array.forEach((ele,idx) => {
    console.log(`${idx}: ${ele}`)
  })
}



function iterate(callback) {
  const stuff = ['pen','dog','egg']
  stuff.forEach(callback)
  return stuff
}

function doToArray(arr,callback) {
  arr.forEach(callback)
}
