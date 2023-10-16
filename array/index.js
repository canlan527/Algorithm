// 实现数组的实现
let arr = ['维生素A','维生素B','维生素C','维生素D'];

// 在数组末尾插入元素，push
Array.prototype.myPush = function (ele) {
   arr[arr.length] = ele
   console.log(arr)
   return arr
}

// arr.myPush('维生素E')

// 在数组开头插入元素
// Array.prototype.myUnshift = function(ele) {
//   // 将数组里的每一位向后移动1位
//   for(let i = arr.length; i >= 0; i--) {
//       arr[i] = arr[i - 1]
//   }
//   arr[0] = ele
//   console.log(arr)
// }

// this
Array.prototype.myUnshift = function(ele) {
  // 将数组里的每一位向后移动1位
  for(let i = this.length; i >= 0; i--) {
      this[i] = this[i - 1]
  }
  this[0] = ele
  console.log(this)
}
arr.myUnshift('-1')

