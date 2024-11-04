function calArea(l,b,callback) {
    var area = l * b;
    callback(l,b,area);
}

function calPerimeter(l,b,area) {
    var perimeter = 2 * (l+b);
    console.log(`The area is ${area}`);
    console.log(`The perimeter is ${perimeter}`);
}


calArea(2, 4, calPerimeter);

