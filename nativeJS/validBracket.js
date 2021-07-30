/*
    название: валидность скобочек
    
    описание: написать функцию, приниммает в себя строку из скобочек []{}()
        и возвращает валидна она или нет 
        
    теги: [строки]
    
    сложность: 10 мин
    
    уровень автора: 2
    
    тесты:
        console.log("--- true", validBracket("()()"));
        console.log("--- true", validBracket("{[]()}[]"));
        console.log("--- false", validBracket("{(})"));
        console.log("--- false", validBracket("({{{[]}}}"));

    решение:
        const validBracket = (s) => {
            let stack = [];
            const iqual = {
                ")": "(",
                "]": "[",
                "}": "{",
            };
            for (let i = 0; i < s.length; i++) {
                const e = s[i];
                const closedBracket = Object.keys(iqual).includes(e);
                if (closedBracket) {
                    const current = stack.pop();

                if (iqual[e] !== current) {
                    return false;
                }
                } else {
                stack.push(e);
                }
            }

            return stack.length === 0;
        };
*/
