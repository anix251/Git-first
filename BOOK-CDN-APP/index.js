function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},"Title:"+props.title);
    const price=React.createElement("h2",{style:{color:"blue"}},"Price:₹"+props.price);
    const btn=React.createElement("button",{style:{color:"orange"}},"Add To Cart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const Bookdata=[
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:345},
    {image:"",title:"ExpressJS",price:765},
    {image:"",title:"Bootstrap",price:389}
];
function App(){
const bookstore=Bookdata.map((b)=>{
    return Book(b)
})
const div=React.createElement("div",{className:"bookstore"},[...bookstore]) //OR directly pass bookstore array
return div;
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());