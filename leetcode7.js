// 整数取反
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const reverse = function (x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
      return 0
    }
    x = ~~(x / 10)
    // if (x < 0) {
    //   x = Math.ceil(x / 10)
    // } else {
    //   x = Math.floor(x / 10)
    // }
  }
  return result
}