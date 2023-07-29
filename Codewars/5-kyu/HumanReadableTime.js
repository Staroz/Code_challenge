// Date: 7/08/2023

function humanReadable(seconds) {

    let hour = String(Math.trunc(seconds/3600));
    let min = String(Math.trunc((seconds/3600 - hour)*60));
    let sec = String(Math.round(((seconds/3600 - hour)*60 - min)*60));
    if (hour.length === 1){
        hour = 0+hour;
        }
    if (min.length === 1) {
            min = 0+min;
        } 
    if (sec.length === 1) {
                sec = 0+sec;
        } else if (sec==60) {
            min=String(Number(min)+1);
            sec= '00';
        } else {
            
        }
    return `${hour}:${min}:${sec}`;
    }

console.log(humanReadable(359999));




/*
Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/
