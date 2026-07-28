function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("register here")
        resolve();
        },10000)
    })
    
    
}
function login(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
console.log("Login Here")
resolve();
    },5000)
    })
    
    
}
function getData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Fetch data from DB")
resolve();
    },7000)
    })
    
    
}
function DisplayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("Display Data")
resolve();
    },3000)
    })
    
    
}
async function main(){
    try{
        await register();
        await login();
        await getData();
        await DisplayData();
    } catch (err) {
        console.log("error", err);
    }
}
main();
// register().then(login).then(getData).then(DisplayData).catch((err)=>{
//     console.log("error",err);
// })
// login();
// getData();
// DisplayData();
console.log("call another function")