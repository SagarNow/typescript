// primitive types 
let username: string = "sagar"
console.log("username: ", username)

let age: number = 21
console.log("age: ", age)

let isOnline: boolean = true
console.log("isOnline: ", isOnline)

// arrays

// i cant use string values in this array 
let phoneNumbers: number[] = [1234567890] 
console.log("Phone Numbers: ", phoneNumbers)

// i cant use number values in this array 
let names: string[] = ["Sagar", "iShowVirus"] 
console.log("Names: ", names)   

//  Tuple
// i cant use different data types in this array 
let person: [string, number] = ["Sagar", 21] 
console.log("Person: ", person) 

// Enum
// i can use only predefined values 
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue
console.log("My Favorite Color: ", favoriteColor)

// any ( avoid using any type )
let randomValue: any = 10
randomValue = "Sagar"
randomValue = true
console.log("Random Value: ", randomValue)

// unknown | safer then any 
let user: unknown = 10
user = "Sagar"

console.log("User: ", user)