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

// es6和数组的新功能
// 1. for of 迭代数组
// for(const n of numbers) {
//   console.log(n % 2 === 0 ? 'even' : 'odd')
// }

// 2. @@iterator对象
// 通过Symbol.iterator访问迭代器对象
// 得到迭代器
let iterator = numbers[Symbol.iterator]()

// console.log(iterator.next().value) // 1
// console.log(iterator.next().value) // 2
// console.log(iterator.next().value) // 3
// console.log(iterator.next().value) // 4
// console.log(iterator.next().value) // 5

// 循环输出numbers的迭代器值

// for(const n of iterator) {
//   console.log(n)  // 1 - 15
// }

// 3.entries ： entries 返回包含键值对的@@iterator
let aEntries = numbers.entries() // 得到键值对的迭代器
// console.log(aEntries.next().value) // [0, 1] - 位置0的值为1
// console.log(aEntries.next().value) // [1, 2] - 位置1的值为2

// 循环输出numbers的键值对
// for (const n of aEntries) {
//     console.log(n)
// }

// 4.keys 返回包含数组索引的@@iterator
const aKeys = numbers.keys()
// console.log(aKeys.next().value) // 0
// console.log(aKeys.next().value) // 1
// console.log(aKeys.next().value) // 2
// console.log(aKeys.next()) // { value: 3, done: false }

// 循环输出numbers的index
// for (const n of aKeys) {
//   console.log(n) // 0 - 14
// }

// 5. values 返回包含数组值的@@iterator
const aValues = numbers.values()
// console.log(aValues.next().value) // 1
// console.log(aValues.next().value) // 2
// console.log(aValues.next().value) // 3

// 循环输出numbers的值
// for (const n of aValues) {
//   console.log(n) // 1 - 15
// }

