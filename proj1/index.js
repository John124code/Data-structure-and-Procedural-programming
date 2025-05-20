// Solution for Problem 1

function sumOfDistinctElements(set1, set2) {
    let sum = 0;


    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sum += set1[i];
        }
    }

    
    for (let j = 0; j < set2.length; j++) {
        if (!set1.includes(set2[j])) {
            sum += set2[j];
        }
    }

    return sum;
}


const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); 