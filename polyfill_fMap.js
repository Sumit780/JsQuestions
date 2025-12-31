

Array.prototype.MyMap = function(callback, thisArg) {

    if(this === undefined){
        throw error
    }

    if( typeof callback !== 'function' ){
        throw console.error(" call back is not a function");
    }

    var result = []

   console.log(arr, thisArg)
    var arr = Object(this);

    console.log(arr)

    for(var i =0; i< arr.length; i++){
     if( i in arr){
        result[i] = callback.call(thisArg, arr[i], i, arr)
     }
    }

    return result;

}

var data = [1,2,3].MyMap((x) => x * 2 )

console.log(data)