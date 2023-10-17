// 实现数组的方法 pop 、 shift
let arr = ['维生素A','维生素B','维生素C'];

// 从数组末尾删除元素
arr.pop()
console.log(arr)

// 从数组开头删除元素
// for(let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i+1]
// }

// console.log(arr) // [ '维生素B', '维生素C', undefined ]
// console.log(arr.length) // 3

// 重新排序
Array.prototype.reIndex = function(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== undefined) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// 删除数组开头元素并重新排序
Array.prototype.myShift = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i+1]
  }
  return this.reIndex(this)
}
console.log(arr.myShift())