'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter((valueA) => objectB.value.includes(valueA.key)).map((valueA) => valueA.key);
}
