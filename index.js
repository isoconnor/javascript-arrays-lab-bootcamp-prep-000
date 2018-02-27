const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
<<<<<<< HEAD
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
var kittens2 = [...kittens,name]
return kittens2
}
function prependKitten(name){
  var kittens2=[name,...kittens]
  return kittens2
}
function removeLastKitten(){
  var kittens2=kittens.slice(0,kittens.length-1)
  return kittens2
}
function removeFirstKitten(){
  var kittens2=kittens.slice(1)
  return kittens2
}
=======
}
>>>>>>> 27fed4861d7d3dc3e5ac73f21251b24f1b7d3010
