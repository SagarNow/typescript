// any type = is a type that allows a variable to hold any type of value.
// when a variable is annotated with "any" type, the compiler will not perform type checking on that variable.
// and disabele all type checking for that variable and its properties.
// warning: using any type defeats the purpose of using typescript.
let color : any = "red";
color = 123;
color = true;   
console.log(color, typeof color);