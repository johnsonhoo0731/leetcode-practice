// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

const maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    ans = Math.max(ans, sum)
  }
  return ans
}

var maxSubArray1 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
  }
  return Math.max(...nums)
}
