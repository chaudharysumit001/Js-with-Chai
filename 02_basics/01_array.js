//arrays

const myArr = [0, 1, 2, 3, 4, 5, 6];

const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array (0, 2, 3 ,4 ,7, 6)

// console.log(myArr[3]);

//Array Methods


myArr.push(7)

// console.log(myArr);
// myArr(pop)
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
myArr.shift()
myArr.shift()
//it adds new value in array at start
// console.log(myArr);

const newArr = myArr.join();
//it changes it to string type
// console.log(typeof newArr);
//string

// slice. splice

console.log("A", myArr);

const myn1 = myArr.slice(1,4);
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,4);
console.log(myn2);



