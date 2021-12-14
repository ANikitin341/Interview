// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const nums = [1, 2, 3, 4];

const subsets = (nums) =>
  nums.reduce(
    (subsets, value) => ([...subsets, ...subsets.map((set) => [value, ...set])]),
    [[]]
  );

console.log(subsets(nums));
