const recurseveWithoutLimitMemory = async (count) => {
  if (count == 0) {
    return count;
  }
  if (count % 1000 === 0) {
    console.log(count);
  }

  await new Promise(function (resolve) {
    resolve();
  });
  return (await recurseveWithoutLimitMemory(count - 1)) + count;
};

recurseveWithoutLimitMemory(1000000).then((res) => {
  console.log("---recurseveWithoutLimitMemory", res);
});

// обычная рекурсия
// const recurseve = (count) => {
//   if (count === 0) {
//     return count;
//   }
//   return recurseve(count - 1) + count;
// };

// console.log("---recurseve", recurseve(10000));
