// Date: 8/12/2023
class Vector {
    constructor(components) {
    this.components = components;
    }
    sameLenght(value){
        return (this.components.length === value.components.length)?true:false;
    }

    equals(value) {
        let ans = true;
        for (let i = 0; i < value.components.length; i++) {
            if (this.components[i] === value.components[i]) {
            } else {
                ans = false;
            }
        }
        return ans;
    };

    add(value) {
        let ans=[];
        if (this.sameLenght(value)) {
            for (let i = 0; i < value.components.length; i++) {
                ans.push(this.components[i]+value.components[i])
            }

        } else {
            throw new Error("value Invalid"); 
        }
        return (new Vector(ans));
    };

    subtract(value) {
        let ans=[];
        if (this.sameLenght(value)) {
            for (let i = 0; i < value.components.length; i++) {
                ans.push(this.components[i]-value.components[i])
            }
        } else {
            throw new Error("value Invalid"); 
        }
        return (new Vector(ans));
    };

    dot(value) {
        let ans=[];
        if (this.sameLenght(value)) {
            
            for (let i = 0; i < value.components.length; i++) {
                ans.push(this.components[i]*value.components[i])
            }

        } else {
            throw new Error("value Invalid"); 
        }
        return (ans.reduce((x,y)=> x+y));
    };

    norm() {
        let ans=[];
        for (let i = 0; i < this.components.length; i++) {
            ans.push(Math.pow(this.components[i],2))
        }
        return Math.sqrt(ans.reduce((x,y)=> x+y));
    }
    toString(){
        return `(${this.components.join(',')})`
    }
  };
//   var Vector = function (components) {
//     // TODO: Finish the Vector class.
//   };

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));

  /*
Description:

Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

a = new Vector([1, 2, 3])
b = new Vector([3, 4, 5])
c = new Vector([5, 6, 7, 8])

a.add(b)      # should return a new Vector([4, 6, 8])
a.subtract(b) # should return a new Vector([-2, -2, -2])
a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c)      # throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
EXAMPLES:


*/