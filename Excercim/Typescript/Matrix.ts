// Date: 8/19/2023
export class Matrix {
    constructor(readonly string: string) {
        this.string = string;
    }
    get rows(): number[][] {
      return this.string.split('\n').map(x => x.split(' ').map(x => parseInt(x)));
    }
  
    get columns(): number[][] {
      let arr = this.string.split('\n').map(x => x.split(' ').map(x => parseInt(x)));
      let ans:number[][]|[]= [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i == 0) {
            ans[j] = [];
            ans[j].push(arr[i][j]);
          } else {
            ans[j].push(arr[i][j]);
          }
        }
      }
      return ans;
    }
  }
  


/*
Description:

Instructions
Given a string representing a matrix of numbers, return the rows and columns of that matrix.

So given a string with embedded newlines like:

9 8 7
5 3 2
6 6 7
representing this matrix:

    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
your code should be able to spit out:

A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
A list of the columns, reading each column top-to-bottom while moving from left-to-right.
The rows for our example matrix:

EXAMPLES:
9, 8, 7
5, 3, 2
6, 6, 7
And its columns:

9, 5, 6
8, 3, 6
7, 2, 7


OTHER SOLUTIONS:

class Matrix {
  readonly rows: number[][]
  readonly columns: number[][]
  constructor(text: string) {
    this.rows = text.split('\n').map((row) => {
      console.log(row);
      return row.split(/\s+/).map(Number)
    })
    this.columns = this.rows[0].map((_, i) => {
      return this.rows.map((row) => row[i])
    })
  }
}
*/
