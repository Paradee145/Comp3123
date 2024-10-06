function lowerCaseWords(mixedArray) {
   
    const resultArray = [];

   
    for (let item of mixedArray) {
       
        if (typeof item === 'String') {
            
            resultArray.push(item.toLowerCase());
        }
    }

   
    return resultArray;
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];