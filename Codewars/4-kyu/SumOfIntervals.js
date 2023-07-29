// Date: 04/28/2023

function sumIntervals(intervals) {
    const arr = intervals.sort((a,b)=>a[0]-b[0]);
    let rta = arr[0][1]-arr[0][0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index][1]>arr[index-1][1]&&arr[index][0]<=arr[index-1][1]){
            rta = rta +(arr[index][1]-arr[index-1][1]);
            };
        if (arr[index][0]>arr[index-1][1]) {
        rta =rta + (arr[index][1]-arr[index][0]);
        };
        if(arr[index][1]<arr[index-1][1]) {
        arr[index][1] = arr[index-1][1];
        };
    }
    return rta;
}

console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));

/*
Introduction.

Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Examples:

sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
*/