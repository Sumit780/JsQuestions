

const arr = [1,2,4,5,3,3,4];
let newArr = []
for(let i= 0 ;i < arr.length; i++){
    for(let j = i; j<arr.length; j++){
      if(arr[i] !== arr[j]){
          if(!newArr.includes(arr[i])){
              newArr.push(arr[i])
          }
          
      }
    }
}

console.log(newArr)
//---------//
const arr1 = [1,2,4,5,3,3,4];

let sortedArr = arr1.sort((a,b) => a - b);
const sa = []

for(let i=0; i< sortedArr.length; i++){
    if(!(sortedArr[i] === sortedArr[i-1])){
       sa.push(sortedArr[i])
    }
}

console.log(sa)