// реализовать класс Store с реализацией подписок на последнее изменениие и на изменениия store
// класс должен содержать три метода set, subscribe, subscribeStore
// set приинимает два парметра ключ и значение и сетит их в стор
// subscribe приниимает коллбэк  это колллбэк принимает последние изменения стора в виде объекта
// subscribeStore приниимает коллбэк  это колллбэк принимает весь стор в виде объекта

const store = new Store();

store.subscribe(console.log);
store.subscribe(console.log);
store.subscribe(console.log);

store.subscribeStore(console.log);
store.subscribeStore(console.log);

store.set("a", "1");
store.set("b", "2");
store.set("c", "3");

//{a:1}
//{a:1}
//{a:1}
//{a:1}
//{a:1}

//{b:2}
//{b:2}
//{b:2}
//{a:1,b:2}
//{a:1,b:2}

//{c:3}
//{c:3}
//{c:3}
//{a:1,b:2,c:3}
//{a:1,b:2,c:3}

// Решениие
// class Store {
//   _store = { data: {}, cl: [] };

//   set(key, val) {
//     this._store.data[key] = val;

//     this._store.cl.forEach((callback) => {
//       callback({ key: val });
//     });
//   }

//   subscribe(fn) {
//     this._store.cl.push(fn);
//   }
// }
