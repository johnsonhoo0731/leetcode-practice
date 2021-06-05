// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 最长公共前缀

/**
 *  prefix: 默认第一位为0   前缀表 !== 前缀
 *  pattern: A B A B C A B A A  p[len]
 *   prefix: 0 0 1 2 0 1 2 3 1  prefix[i]
 *   0 A B
 *   1 A B A
 *   2 A B A B
 *   0 A B A B C
 *   1 A B A B C A
 *   2 A B A B C A B
 *   3 A B A B C A B A
 *   1 A B A B C A B A A
*/


const move_prefix_table = (prefix) => {
  const n = prefix.length
  for (let i = n - 1; i > 0; i--) {
    prefix[i] = prefix[i - 1]
  }
  prefix[0] = -1
}

// 求前缀表
const prefix_table = (pattern, prefix) => {
  const n = pattern.length
  prefix[0] = 0
  let i = 1, len = 0
  while (i < n) {
    if (prefix[i] === prefix[len]) {
      len++
      prefix[i++] = len
    } else {
      if (len > 0) {
        len = prefix[len - 1]
      } else {
        prefix[i++] = len
      }
    }
  }
  move_prefix_table(prefix)
}

const kmp_search = (text, pattern) => {
  const prefix = []
  prefix_table(pattern, prefix)
  // text[i] ---> length = m 
  // pattern[j] ---> length = n
  let i, j = 0
  const m = text.length, n = pattern.length
  while (i < m) {
    if (j === n - 1 && text[i] === pattern[j]) {
      console.log('Found pattern at ', i - j)
      j = prefix[j]
    }
    if (pattern[j] = text[i]) {
      i++
      j++
    } else {
      j = prefix[j]
      if (j === -1) {
        j++
        i++
      }
    }
  }
}
