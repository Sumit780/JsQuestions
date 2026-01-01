Array.prototype.myReduce = function(callback, initialvalue){





var arr = Object(this);
var accumulator = initialvalue || 0;
var length = arr.length
var startIndex = 0

// if(arguments.length > 1){
//     accumulator = initialvalue
// }else {
//     while(startIndex < length && !(startIndex in arr)){
//         startIndex++
//     }

//     if(startIndex >= length ){
//         throw new console.error();
        
//     }

//     accumulator = arr[startIndex++]
// }

for(var i = startIndex; i< length; i++){
    if(i in arr){
        accumulator = callback(accumulator, arr[i], i, arr)
    }
}
return accumulator;

}

let data = [1, 2, 3, 4].myReduce(function (acc, curr) {
  return acc + curr;
}, 0);
// → 10
console.log("asd", data);
