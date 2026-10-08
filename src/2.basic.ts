// functions
function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2));

// void - no return value , means function doesn't return anything
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello World"); // Type Error if we pass number instead of string

// null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(nullValue);
console.log(undefinedValue);


