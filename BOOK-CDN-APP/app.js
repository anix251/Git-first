import Book from "./book.js";
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
export default App;