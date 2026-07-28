const student={
    name: "Aniket",
    age:20,
    branch:"CSE"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
const{age,name,branch}=student;
//const{age,name:newname,branch}=student;
//console.log("name=",newname)
console.log("name=",name)
console.log("age=",age)
console.log("branch=",branch)