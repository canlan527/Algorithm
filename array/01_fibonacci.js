// 斐波那契数列的前20个数
function getFibonacci() {
  const fibonacci = []
  fibonacci[0] = 1;
  fibonacci[1] = 1;

  for(let i = 2; i < 20; i ++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }

  // 循环输出 fibonacci
  for(let i = 0; i < fibonacci.length; i++) {
    console.log(`第${i+1}项: ${fibonacci[i]}`);
  }
}

getFibonacci()