
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input is not an array'));
        } else {
            const resultArray = mixedArray
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(resultArray);
        }
    });
};


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result); // Output: ['pizza', 'wings']
    })
    .catch(error => {
        console.error(error);
    });




 