/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0]);
  const dp = new Array(T + 1).fill(101);
  dp[0] = 0;

  for (let i = 0; i < clips.length; i++) {
    const [start, end] = clips[i];
    if (dp[start] == 101) {
      break;
    }
    for (let j = start + 1; j <= end; j++) {
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }

  if (dp[T] == 101) {
    return -1;
  }

  return dp[T];
};
