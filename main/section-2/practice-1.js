'use strict';

module.exports = function countSameElements(collection) {
    let map = new Map();
    collection.forEach(key => {
        map.set(key, map.has(key) ? map.get(key) + 1 : 1);
    })
    return Array.from(map).map(value => {
        return {
            key: value[0],
            count: value[1]
        }
    });
}
