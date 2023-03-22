let age=18;
let name="Kiran";
let setStatus=false;
let userDefault=undefined;
let responseValue=null;
console.log(age)
console.log(name)
console.log(setStatus)
console.log(userDefault)
console.log(responseValue) 
let oldage=age;
age=25;
console.log(age);
let status=setStatus;
setStatus=true;
console.log(setStatus);
function Test()
{
    const hi=()=>{alert("Check the console output!")}
    return <div><button onClick={hi}>Primitive Datatypes and call the function</button></div>
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'))