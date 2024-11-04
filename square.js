function square(l,callback){
var square = l*l;
console.log(`Square of ${l} is ${square}`);
callback(square,l); //cube(9,3)
};
function cube(a,b){
    var cube = a*b;
    console.log(`Cube of is ${cube}`);
}
square(3,cube);
