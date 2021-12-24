// смержитить интервалы

const input1 = [
  [2, 3],
  [6, 8],
  [1, 4],
  [11, 12],
  [5, 7],
  [8, 10],
]; // [[1, 4],[5, 10],[11, 12]];

const input2 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1, 6],[8, 10],[15, 18]];

// const mergeInrevals = (intervals) => {
//   return [...intervals]
//     .sort((a, b) => a[0] - b[0])
//     .reduce((acc, interval) => {
//       if (acc.length === 0) {
//         return [interval];
//       }
//       const lastInterval = acc[acc.length - 1];
//       if (interval[0] <= lastInterval[1]) {
//         acc[acc.length - 1] = [
//           lastInterval[0],
//           Math.max(interval[1], lastInterval[1]),
//         ];
//       } else {
//         acc.push(interval);
//       }
//       return acc;
//     }, []);
// };

console.log("1---[[1, 4],[5, 10],[11, 12]]", mergeInrevals(input1));
console.log("2---[[1, 6],[8, 10],[15, 18]]", mergeInrevals(input2));
