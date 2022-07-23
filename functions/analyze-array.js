export{sortedObject};

function sortedObject (array) {

const averageCalculator = (array) => {
    let ave = 0
for(let i = 0; i < array.length; i++) {
    ave += array[i];
}

return ave / array.length
    }


    return {min: array.sort()[0], max: array.sort()[array.length-1],
    average: averageCalculator(array), length: array.length}
} 