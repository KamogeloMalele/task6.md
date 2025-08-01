function task6(){
    let list = -100000000;
    for (let a = 0; a < arguments.length; a++){
        let def = arguments[a];
        if (def > list){
            list = def;
        }
    }
    return list;
}
console.log(task6());
module.exports = { task6};