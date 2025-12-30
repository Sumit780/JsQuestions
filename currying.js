const newSum = (a) =>{
    return (b) => {
        if(!b){
            return a
        }else {
            return sum(a +b)
        }
    }
}

// second way

const sum = (a) =>{
    let total = a;

    return inner =(b) => {
        if(!b){
            return total
        }else {
            total += b;
            return inner;
        }
    }
}



console.log(sum(1)(2)(3)());
console.log(newSum(1)(2)(3)());