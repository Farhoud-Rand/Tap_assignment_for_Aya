//// QUESTION 2
//Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.
function findSum(arr, target_sum) {
    for(let i=0; i<arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target_sum) {
                return [i, j];
            }
        }
    }
}
