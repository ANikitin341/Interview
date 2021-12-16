function delay(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

const recurseveWithoutLimitMemory = async (count) => {
  if (count == 0) {
    return count;
  }
  if (count % 1000 === 0) {
    console.log(count);
  }

  await delay(1);
  const c = (await recurseveWithoutLimitMemory(count - 1)) + count;
  return c;
};

recurseveWithoutLimitMemory(10).then(function (res) {
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
