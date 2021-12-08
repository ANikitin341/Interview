// const chunk = (arr, n) => {
//   return arr.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / n);

//     if (!resultArray[chunkIndex]) {
//       resultArray[chunkIndex] = [];
//     }

//     resultArray[chunkIndex].push(item);

//     return resultArray;
//   }, []);
// };

// const rea = [[1,2],[3,4]]

const res = chunk([1, 2, 3, 4, 5, 6, 7], 2);
console.log("---res", res);
