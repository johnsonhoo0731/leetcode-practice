// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

const lengthOfLongestSubstring = function(s) {
  const arr = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
      const index = arr.indexOf(s[i])
      if (index > -1) {
          arr.splice(0, index + 1)
      }
      arr.push(s[i])
      max = Math.max(arr.length, max)
  }
  return max
};

const lengthOfLongestSubstring2 = function (s) {
	let l = 0; // 定义左指针
	let res = 0; // 结果
	let map = new Map(); // 存放字符和对应下标
	for (let r = 0; r < s.length; r++) {
		// 如果出现了重复字符，则把左指针移到重复字符的下一位。注意同时满足重复字符的索引大于左指针。
		if (map.has(s[r]) && map.get(s[r]) >= l) {
			l = map.get(s[r]) + 1;
		}
		res = Math.max(res, r - l + 1); // 计算结果
		map.set(s[r], r); // 存下每个字符的下标
	}
	return res;
};