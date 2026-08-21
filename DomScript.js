function addParagraph(){
    const para=document.createElement("p");
    para.innerHTML="<i>This is new Para</i>";
    para.style.color="blue";
    const par=document.getElementById("root");
    par.appendChild(para);
}

function rem(){
    const par=document.getElementById("root");
    par.removeChild(par.lastChild);
}

function remAll(){
    const par=document.getElementById("root");
    // while(par.firstChild){
    //     par.removeChild(par.lastChild);
    // }
    //OR// use forEach function

    par.innerHTML="";
}