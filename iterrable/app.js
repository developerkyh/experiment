"use strict"

let test1 = document.getElementById('testId');
let range = {
    from : 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { 
                done:false,
                value: this.current++
            };
        } else {
            return {done: true};
        }
    }
}

for (let num of range) {
    console.log(num);
    console.log(range);
}

/* 
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { 
                    done:false,
                    value: this.current++
                };
            } else {
                return {done: true};
            }
        }
    }
}
 */
