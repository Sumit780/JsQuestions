const  nestedFlattenArray  = [1, [2, 5, 6], 6, [ 7, 8]];

const flattenArray = nestedFlattenArray.flat();
console.log(flattenArray);

const flattenArray2 = nestedFlattenArray.reduce((acc, val) => acc.concat(val), []);
console.log(flattenArray2);


const flattenArray3 = () =>{
    const result = [];
    nestedFlattenArray.forEach((arr) => {
        if(Array.isArray(arr)){
            result.push(...arr);
        }else{
            result.push(arr);
        }
        return result;
    })

    console.log(result);
}

flattenArray3()
