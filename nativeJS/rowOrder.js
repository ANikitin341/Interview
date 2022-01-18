/*
    название: подстроки массивов
    
    описание: 
        Даны два массива строк a1 и a2 возвращен отсортированный массив лексикографическом порядке,
        строки a1 которого являются подстроками строк a2.
        Осторожно: массив должен быть без дубликатов

    теги: [функции, рекеурсия]
    
    сложность: 5 мин
    
    уровень автора: 2

    тесты:
        Пример 1:
        a1 = ["arp", "live", "strong"]
        a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
        const res = substring(a1, a2);
        console.log("---["arp", "live", "strong"]---", res);

        Пример 2:
        a1 = ["tarp", "mice", "bull"]
        a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
        const res = substring(a1, a2);
        console.log("---[]---", res);
    
    решение:
        const substring = (a1, a2) => {
          const resArr = a1.filter((s1) => a2.some((s2) => s2.indexOf(s1) + 1));
          return [...new Set([...resArr])];
        };
*/
