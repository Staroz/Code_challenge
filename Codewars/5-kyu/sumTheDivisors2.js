// Date: 16/09/2023

function  dsMultofPfs(n1, n2) {
    let ans = [];   
    // prime array
    let primeArray = [2,3];
    for (let i = 4; i <=n2; i++ ) {
        for (let j = 0; j < primeArray.length; j++) {
            let element = primeArray[j]
            if (i%element===0) {
                break
            } else if (j === primeArray.length-1) primeArray.push(i)
        }
    }

    for (let i = n1; i <= n2; i++) {
        if (primeArray.lastIndexOf(i)!=-1) { 
            continue};
        // to pfs
        let pfs = 0;
        let n = i
        for (let j = 0; j < primeArray.length ; j++) {
            const element = primeArray[j];
            if (n%element ===0) {
                n = n/element;
                pfs+= element;
                j = -1
            } else if (n===1) continue;
        }
        //to divisor
        let divisor = 0;
        for (let k = 1; k <=i; k++ ) {
            if (i%k === 0 ) divisor +=k;
        }
        if (divisor%pfs===0) ans.push(i);
    }
    return ans;
}

module.exports = { dsMultofPfs }

/*
Description:
LINK: https://www.codewars.com/kata/562c04fc8546d8147b000039


*/
