// 01.数组合并 concat
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-1, -2, -3]
let numbers = negativeNumbers.concat(zero, positiveNumbers)
// console.log(numbers) // [-1, -2, -3, 0, 1, 2, 3]

// 02.迭代器函数
// 返回偶数，否则返回false
function isEvenFn(x) {
  // 如果x是2的倍数，就返回true
  console.log(x)
  return x % 2 === 0 ? true : false
}

// return x % 2 === 0 ? true : false 也可以写成 return (x % 2 === 0)

// 修改numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// es6箭头函数
const isEven = x => x % 2 === 0

// console.log(isEven)

// every ：every 会迭代数组中的每一个元素，直到返回false
// console.log(numbers.every(isEven)) 
// false

// some： some 会迭代数组中的每一个元素，直到返回true
// console.log(numbers.some(isEven)) 
// true

// forEach 迭代整个数组
// numbers.forEach(x => console.log( x %2 === 0))

// map
const myMap = numbers.map(isEven)
// console.log(myMap)
// [
//   false, true,  false,
//   true,  false, true,
//   false, true,  false,
//   true,  false, true,
//   false, true,  false
// ]

// filter
const evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)
// [ 2,  4,  6, 8, 10, 12, 14 ]

// reduce : reduce 会返回一个将被叠加到累加器的值，最后reduce会返回累加器
// 如果要对数组中的元素求和，可以使用reduce 
const sum = numbers.reduce((previousValue, current) => previousValue + current)
// console.log(sum) // 120
