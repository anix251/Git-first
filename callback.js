function register(cb){
    setTimeout(()=>{
        console.log("register here")
        cb();
    },10000)
}
function login(cb){
    setTimeout(()=>{
        console.log("Login Here")
        cb();
    },5000)
}
function getData(cb){
    setTimeout(()=>{
        console.log("Fetch data from DB")
        cb();
    },7000)
}
function DisplayData(){
    setTimeout(()=>{
        console.log("Display Data")
    },3000)
}
//callback hell
register(()=>{
    login(()=>{getData(()=>{DisplayData();})})});
// login();
// getData();
// DisplayData();
console.log("call another function")