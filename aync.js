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
            let icecream=false;
            if(icecream){
                resolve("Got Icecream")
            }else{
                reject("Didn't get Icecream")
            }
        }, 1600);
    })
}
async function snack(){
    try {
        await makeWaffle();
        await getIcecream();
        console.log("Set up the table")
    } catch (error) {
        console.log(`${error}so make chocolate syrup`)
    }
}
snack()