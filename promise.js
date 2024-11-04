function makeWaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Waffle is ready")
        }, 2500);
    })
}
function getIcecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let icecream=true;
            if(icecream){
                resolve("Got Icecream")
            }else{
                reject("Didn't get Icecream")
            }
        }, 1600);
    })
}
function snack(){
    makeWaffle().then(function(data){
        console.log(data)
        return getIcecream()
    })
    .then(function(data){
        console.log(data);
        console.log("Set up the table.")
    })
    .catch(function(error){
        console.log(`${error} so make the chocolate`)
    })
}
snack()