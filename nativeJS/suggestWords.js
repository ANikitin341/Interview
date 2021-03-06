/*
    название: перебор из массива
    
    описание:
        написать функцию которая на вход принимает введенное число,  массив слов, число прдложенных
        необходимо вернуть массив слов которые мы сможем написать используя клавиатуру кнопочного тлф максимальное число предложенных
        цифры можем писать в любом порядке
        
    
    теги: [массивы]
    
    сложность: 40 мин
    
    уровень автора: 2
    
    тесты:
        const number = 3662277;
        const words = ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"];
        const output = ["foo", "bar", "foobar", "emo", "cap", "car"];

        const number1 = 234;
        const words1 = ["adg", "abc", "adgj", "bcd", "cfil"];
        const output1 = ["adg", "adgj"];

        const numberToSymbol = {
          0: [],
          1: [],
          2: ["a", "b", "c"],
          3: ["d", "e", "f"],
          4: ["g", "h", "i"],
          5: ["j", "k", "l"],
          6: ["m", "n", "o"],
          7: ["p", "q", "r", "s"],
          8: ["t", "u", "v"],
          9: ["w", "x", "y", "z"],
        };

    решение:
        const checkWords = (number, words) =>
          words.filter((word) => {
            let num = [...`${number}`].map((e) => numberToSymbol[e]);
            return [...word].every((symbol, i) => {
              if (num?.[i]?.includes(symbol) || num.length < i + 1) {
                return true;
              }
              return false;
            });
          });
*/
