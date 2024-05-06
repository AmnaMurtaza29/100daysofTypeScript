"use strict";
function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
function processObject(obj) {
    obj.print();
    obj.log();
}
const obj = {
    print() {
        console.log('Printing...');
    },
    log() {
        console.log('Logging...');
    },
};
processObject(obj);
