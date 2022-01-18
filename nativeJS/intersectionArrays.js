/*
    название: пересечение массивов
    
    описание: написать функцию котороя принимает два массива и возвращает их пересечения

    теги: [функции, массивы]
    
    сложность: 7 мин
    
    уровень автора: 2
    
    тесты:
    const arr1 = [1, 1, 2, 3, 4, 4, 4];
    const arr2 = [1, 3, 4, 4, 5, 5];

    const res = [1, 3, 4, 4];
    
    решение:
        const intersection = (_arr1, _arr2) => {
            const arr1 = [..._arr1];
            const arr2 = [..._arr2];
            return arr1.filter((el1) => {
                const index = arr2.findIndex((el2) => el1 === el2);
                if (index + 1) {
                arr2.splice(index, 1);
                return true;
                }
                return false;
            });
        };
*/
