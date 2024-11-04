function calculateAreaAndCircumference(radius, callback) {
    var area = (Math.PI * radius * radius);
    console.log(` Area = ${area}`)
    callback();
}
function calculateCircumference(radius) {
    
      var cir = 2*Math.PI * radius
      console.log(`cir = ${cir}`)
}
calculateAreaAndCircumference(4,calculateCircumference);
