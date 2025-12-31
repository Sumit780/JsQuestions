
Array.prototype.myFilter = function(callback, thisArg){
    var result = [];
    var arr = Object(this)
    console.log(arr)
    for(var i = 0; i < arr.length; i++){
        if(i in arr){
           if(callback.call(thisArg, arr[i], i, arr)){
            console.log(arr[i])
            result.push(arr[i])
           }
        }
    }
 return result;
}

var data = [1,2,3, 4].myFilter((x) => x > 2 )

console.log(data)