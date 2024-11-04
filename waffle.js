makeWaffle(getIcecream);

function makeWaffle(callback){
    setTimeout(() => {
       console.log("Set the table");
       console.log("Waffle is ready");
       callback() 
    }, 3500);
};

function getIcecream(){
    setTimeout(() => {
        let icecream=false;
        if(icecream){
            console.log("Got the Icecream!")
        }
        else{
            console.log("Didn't get Icecream.")
        }
    }, 2500);
}