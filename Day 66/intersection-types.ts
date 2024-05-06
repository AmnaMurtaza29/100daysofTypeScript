// 5. Intersection Types
type Printable = {
    print: () => void;
};
type Loggable = {
    log: () => void;
};
function processObject(obj: Printable & Loggable) {
    obj.print();
    obj.log();
}
const obj: Printable & Loggable = {
    print() {
        console.log('Printing...');
    },
    log() {
        console.log('Logging...');
    },
};

processObject(obj);