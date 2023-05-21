// DESTRUCTURING OBJECTS:


// Here, we create three variables a, b, and c, and assign them the values from the object by using the property names as variable names.

// const creatures = { a: "Aardvark", b: "Blue Dragon Sea Slug", c: "Capybara" }

// const { a, b, c } = creatures

// console.log(a)
// console.log(b)
// console.log(c)

// =============================================================

// We can also assign default values to the variables:

// const creatures = { a: "Aardvark",  c: "Capybara" }

// const { a, b = "Blobfish", c } = creatures

// console.log(a)
// console.log(b)
// console.log(c)

// =============================================================

// We can also assign the extracted values to new variable names:

// const creatures = { a: "Aardvark", b: "Blue Dragon Sea Slug", c: "Capybara" }

// const {
//    a: longNosedCreature,
//    b: slimySeaCreature,
//    c: oddlyShapedYetAdorableCreature,
// } = creatures

// console.log(longNosedCreature)
// console.log(slimySeaCreature)
// console.log(oddlyShapedYetAdorableCreature)

// =============================================================

// Destructuring in Function Parameters

// Destructuring can also be used with function parameters. Let's say we have a function that takes an object as a parameter:

// function printValues(obj) {
//     console.log(obj.c);
//     console.log(obj.l);
//     console.log(obj.s);
//   }

//   const peanutsCharacters = { c: "Charlie Brown", l: "Linus", s: "Snoopy" };
//   printValues(peanutsCharacters);

// ==============================================================

// We can rewrite this function using destructuring like this:

// function printValues({ c, l, s }) {
//    console.log(c)
//    console.log(l)
//    console.log(s)
// }

// const peanutsCharacters = { c: "Charlie Brown", l: "Linus", s: "Snoopy" };
// printValues(peanutsCharacters);

// This makes the code more concise and readable.

// ===============================================================



//Destructuring Arrays

// Here, we create three variables a, b, and c, and assign them the values from the array.

// const vegetables = ["artichoke", "bamboo shoot", "cauliflower"]

// const [a, b, c] = vegetables

// console.log(a)
// console.log(b)
// console.log(c)

// In this example, we skipped the second value in the array by leaving out the variable name for it.

// const vegetables = ["artichoke", "bamboo shoot", "cauliflower"]

// const [a, , c] = vegetables
// console.log(a)
// console.log(c)

// In this example, we use the spread operator ... to pass the elements of the array as separate arguments to the printArrayValues function. The destructured variables a, b, and c correspond to the elements of the array.

// function printArrayValues(a, b, c) {
//    console.log(a)
//    console.log(b)
//    console.log(c)
// }

// const array = ["Garfield", "Lassie", "Mickey"]
// printArrayValues(...array) // this is like calling printArrayValues("Garfield", "Lassie", "Mickey")
