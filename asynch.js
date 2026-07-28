function register(){
    setTimeout(()=>{
console.log("register here")
    },10000)
    
}
function login(){
    setTimeout(()=>{
console.log("Login Here")
    },5000)
    
}
function getData(){
    setTimeout(()=>{
console.log("Fetch data from DB")
    },7000)
    
}
function DisplayData(){
    setTimeout(()=>{
console.log("Display Data")
    },3000)
    
}

register();
login();
getData();
DisplayData();
console.log("call another function")