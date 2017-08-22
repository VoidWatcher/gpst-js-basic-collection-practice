'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map((value) => {
        if (objectB.value.includes(value.key)) {
            value.count -= Math.floor(value.count / 3);
        }
        return value;
    });
}
