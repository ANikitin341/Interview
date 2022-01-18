/*
    название: подписка на стор
    
    описание:
        реализовать класс Store с реализацией подписок на последнее изменениие и на изменениия store
        класс должен содержать три метода set, subscribe, subscribeStore
        set приинимает два парметра ключ и значение и сетит их в стор
        subscribe приниимает коллбэк  это колллбэк принимает последние изменения стора в виде объекта
        subscribeStore приниимает коллбэк  это колллбэк принимает весь стор в виде объекта

    теги: [классы]
    
    сложность: 20 мин
    
    уровень автора: 2
    
    тесты:
    const store = new Store();

    store.subscribe(console.log);
    store.subscribe(console.log);
    store.subscribe(console.log);

    store.subscribeStore(console.log);
    store.subscribeStore(console.log);

    store.set("a", "1");
    store.set("b", "2");
    store.set("c", "3");

    // в консоле должно получиться
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
        

    решение:
        class Store {
            _store = { data: {}, subscribes: [], subscribesStore: [] };

            set(key, val) {
                this._store.data[key] = val;

                this._store.subscribes.forEach((callback) => {
                callback({ [key]: val });
                });
                this._store.subscribesStore.forEach((callback) => {
                callback(this._store.data);
                });
            }

            subscribe(fn) {
                this._store.subscribes.push(fn);
            }

            subscribeStore(fn) {
                this._store.subscribesStore.push(fn);
            }
        }
*/
