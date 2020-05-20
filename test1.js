// let me = { 
//     name: "Hello Js", 
//     thisInArrow:() => { 
//     console.log("My name is " + name); // undefined 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // working 
//     } 
// };
// me.thisInArrow(); 
// me.thisInRegular();

class Person{
    constructor(name) {
        this.name = name
    }

    printNameArrow = () =>{
        console.log('Arrow:  ',this.name);
    }

    SetTimeoutprintNameArrow() {
        setTimeout(() => {
            console.log('SetTimeout Arrow Function: ', this.name);
        }, 100);
    }

    printNameFunction() {
        console.log('Function: ',this.name);
    }

    SetTimeoutprintNameFunction(){
        setTimeout(function(){
            console.log('setTimeout Regular Function:  ',this.name);
        }, 200);
    }
}

let person = new Person('Hello JavaScript');
person.printNameArrow();
person.printNameFunction();
person.SetTimeoutprintNameArrow();
person.SetTimeoutprintNameFunction();
