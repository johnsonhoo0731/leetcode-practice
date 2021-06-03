// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

const longestCommonPrefix = (strs) => {
  if (!strs) {
    return ''
  }
  let str = strs[0]
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const flag = strs.every((item) => item[i] === str[i])
    if (flag) {
      res += str[i]
    } else {
      return res
    }
  }
  return res
}