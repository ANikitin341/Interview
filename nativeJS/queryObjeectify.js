/*
    название: получение объека из строки
    
    описание: 
        написать функцию которая на вход принимает сттроку в которой через точку написан путь до свойства
        а пути разделяются меежду собой "&"
        на выходе должны получить объект с нужной струуктурой объекта

    теги: [функции, объекты]
    
    сложность: 50 мин
    
    уровень автора: 2
    
    тесты:
      const input = `user.name.firstname=Bob&user.name.lastname=Smit&user.favoritecolor=Light%20BLue&expiremets.theme=dark`;
      const output = {
        user: {
          name: {
            firstname: "Bob",
            lastname: "Smit",
          },
          favoritecolor: "Light Blue",
        },
        expiremets: { theme: "dark" },
      };
    
    решение:
     const queryObjeectify = (str = "") => {
      let res = {};
      str.split("&").forEach((el) => {
        const [keyStr, value] = el.split("=");

        keyStr.split(".").reduce((cur, key, i, arr) => {
          if (i === arr.length - 1) {
            return (cur[key] = decodeURIComponent(value));
          }
          if (cur[key]) {
            cur = cur[key];
          } else {
            cur[key] = {};
            cur = cur[key];
          }
          return cur;
        }, res);
      });
      console.log("---res", res);
      return res;
    };

    объяснение:
      let a = {}; //1
      let b = a; //1
      console.log("1---a", a);
      console.log("1---b", b);

      b.c = {}; //2
      console.log("2---a", a);
      console.log("2---b", b);

      b = b.c; //2
      console.log("3---a", a);
      console.log("3---b", b);

      b.d = {}; //3
      console.log("4---a", a);
      console.log("4---b", b);

      b.f = 5; // 2
      console.log("5---a", a);
      console.log("5---b", b);

      b = b.d; //3
      console.log("6---a", a);
      console.log("6---b", b);
*/
