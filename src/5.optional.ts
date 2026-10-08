// optional parameters/ properties - ?
// lets create a user type with optional properties in object

type User = {
    name: string;
    age?: number;
}

let user: User = {
    name: "John",
    // age is optional we don't need to pass it 
}
console.log(user);