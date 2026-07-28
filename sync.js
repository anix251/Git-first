function register(){
    waitForDelay(10000);
    console.log("register here");
}
function login(){
    waitForDelay(5000);
    console.log("Login Here")
}
function getData(){
    waitForDelay(3000);
    console.log("Fetch data from DB")
}
function DisplayData(){
    waitForDelay(6000);
    console.log("Display Data")
}
function waitForDelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt)
    {

    }
}
register();
login();
getData();
DisplayData();
console.log("call another function")