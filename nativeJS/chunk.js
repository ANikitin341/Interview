/*
    название: разбиение массива на куски
    
    описание:написать функцию которая приинимает массив и колличество элментов в куске 
     на выходе должена вернуть массив с массиивами где колличество элеметов в куске равно 2му параметру 
    
    теги: [числа, массивы]
    
    сложность: 7 мин
    
    уровень автора: 2
    
    тесты:
        console.log("---[[1,2],[3,4],[5,6],[7]]", chunk([1, 2, 3, 4, 5, 6, 7], 2));

    решение: 
        const  сhunk = (arr, arg) => {
            const res = []
            for (let index = 0; index < arr.length; index +=arg ) { 
                const tepmArr= arr.slice(index,index+arg)
                res.push(tepmArr)
            }
            console.log('---res', res)
            return res
        }
        
*/

