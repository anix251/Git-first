function sum(...num){
    const sum=num.reduce((s,i)=>s+i,0);
    return sum;
}
 const add=(...num)=>{ //export can be written before function 
    let s=0;
    for(let i of num){
        s+=i;
    }
    return s;
}
// export default sum; if only single function is exported then we can use default export
export {sum,add}; // if multiple functions are exported then we can use named export
