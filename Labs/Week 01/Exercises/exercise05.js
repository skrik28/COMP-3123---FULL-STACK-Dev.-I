// Exercise 05
// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
// (numbers that follow each other in order) of a given array.

function maxSumOfKConsecutiveNumbers(arr, k) {
    if (arr.length < k || k <= 0) {
        console.log("array length must be greater than or equal to selected amount of consecutive numbers (k)");
    }

    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;

    // Slide the window from the start to the end of the array
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 3;

const result = maxSumOfKConsecutiveNumbers(array, k);
console.log(result); // Output: 24 (which is the sum of [7, 8, 9])