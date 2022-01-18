/*
    название: Преобразование массива в объект с группировкой и фильтрацией элементов
    
    описание: 
        Напишите функцию, которая на вход принимает массив из студентов,
        где студент — это объект с полями «имя», «возраст» и «номер группы»
        {name: string, age: number, groupId: number},
        а на выходе возвращает объект, где ключ — это номер группы,
        а значение — массив из студентов старше [maxAge] лет.

    теги: [функции, массив, объект]
    
    сложность: 5 мин
    
    уровень автора: 2

    тесты:
        const students = [
          {
            name: "Dima",
            age: 23,
            groupId: 1,
          },
          {
            name: "Julia",
            age: 16,
            groupId: 1,
          },
          {
            name: "Tatiana",
            age: 20,
            groupId: 1,
          },
          {
            name: "Dima",
            age: 23,
            groupId: 1,
          },
          {
            name: "Alexandr",
            age: 17,
            groupId: 1,
          },
          {
            name: "Andrew",
            age: 24,
            groupId: 1,
          },
          {
            name: "Max",
            age: 23,
            groupId: 4,
          },
          {
            name: "Pavel",
            age: 23,
            groupId: 4,
          },
          {
            name: "Olga",
            age: 23,
            groupId: 4,
          },
        ];

        const maxAge = 17;

        const res = {
          1: [
            { name: "Dima", age: 23, groupId: 1 },
            { name: "Tatiana", age: 20, groupId: 1 },
            { name: "Dima", age: 23, groupId: 1 },
            { name: "Andrew", age: 24, groupId: 1 },
          ],
          4: [
            { name: "Max", age: 23, groupId: 4 },
            { name: "Pavel", age: 23, groupId: 4 },
            { name: "Olga", age: 23, groupId: 4 },
          ],
        };
    
    решение:
        const sortStudentsByGroup = (arr, maxAge) => {
          const sortStudent = {};
          arr.forEach((value) => {
            if (value.age <= maxAge) {
              return;
            }
            sortStudent[value.groupId] = sortStudent[value.groupId]
              ? [...sortStudent[value.groupId], value]
              : [value];
          });
          return sortStudent;
        };

*/
