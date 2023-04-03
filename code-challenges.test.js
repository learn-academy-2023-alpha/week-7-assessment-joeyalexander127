// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
  describe("capName", ()=> {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    it("Return array of objects with names capped with sentence about person",()=> {
      expect(capNamed2(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    }
  )})
  //------Test failing with out function------
  // FAIL  ./code-challenges.test.js
  // capName
  //   ✕ Return array of objects with names capped with sentence about person (3 ms)
  // ● capName › Return array of objects with names capped with sentence about person
  //   ReferenceError: capName is not defined

// b) Create the function that makes the test pass.
//-----Pseudo Code-------
// Input: Array of Objects
// Output: Array
// Create a function called capName that has a parameter array.
// (The first approach is messy and im sorry to either Gene or Nicole who has to read this) 
// Well lets do this...you are going to map over the array that was passed into the function and the first portion of the function we are only worried about the key value pair <name>. Therefore, we need to use dot notation to acccess just the name in the object by using <value.name>. We then need to uppercase the first index of the value.name and then slice everything else after that and add it to the capitilizaed first letter. So we are slicing from index[1] to the first emepty space in the name + 1 and then adding that sliced portion back to the first letter we capitilized. (that only takes care of the first name, we still have the last name to cap). To cap the last name we need to find the character after the first empty space and cap it we do this by finding the indexOf(" ") +1 of value.name and use the built in  method toUpperCase (value.name.charAt(value.name.indexOf(" ") + 1).toUpperCase()). Great so far we have the fisrt name capped and concated back together with the first letter of the last name capped. Now we just need to concat the rest of the last name back together. we do this by slicing from the empty space +2 so we ignore the fisrt letter because we already have that, by  indexOf(" ") +2. and we concat everything after that point to the first letter of the last name that we capped. We now have the first and last name capped.
// now we just need to concat the occupation to our newly capped first and last name
// then return this disaster of concatenation 

const capName = (array) => {
  return array.map((value) => {
   return value.name[0].toUpperCase() + value.name.slice(1, value.name.indexOf(" ") + 1) + value.name.charAt(value.name.indexOf(" ") + 1).toUpperCase() + value.name.slice(value.name.indexOf(" ") + 2) + " is " + 
   value.occupation + "."
  })
}

//----Refactored because the first one is UGLY-----
// ---- ALSO this approach is much more dynamic and will work with more than two names of just first and last----
//Again i appologize for the dissaster above but here is a prettier way of solving this problem....
// Input: array of objects
// Output: array of strings
// Create a function called capNamed2 that takes in an array as an argument
// we are going to map over the given array
// create a const called <name> and set it equal to each <value.name> split at the first empty space by split(' ')
// and then map over that each individual work that we split at in the original array and cap the value at index 0 and the concat it with the word sliced at index[1] which will add the first letter capped to the rest of the letters in the word and then join(' ') back to its original array.
//create a const <occ> which is a comibnation of concated strings and key value pairs from the given object array of " is " + value.occupation + "."
//then return the variables <name + occ>
const capNamed2 = (array) => {
  return array.map((value)=> {
    const name = value.name.split(' ').map((word)=> word[0].toUpperCase() + word.slice(1)).join(' ')
    const occ = " is " + value.occupation + "."
    return name + occ
  })
  }

//------Test passing with function------
// PASS  ./code-challenges.test.js
// capName
//   ✓ return array of objects with names capped with sentence about person (4 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.698 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("onlyRemaindersbyof3", ()=> {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
it("Cube each index and return the sum of all indexs", ()=> {
  expect(onlyRemaindersbyof3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(onlyRemaindersbyof3(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})

// b) Create the function that makes the test pass.
//Pseudo Code------
//Input: array
// Output: array
//create a function called onlyRemainders that has a parameter of <array>
// within our function we will use the higher order function <filter> to return a subset array of only the 
// numbers from the original array using the typeof value strictly equals 'number'
// once we have that subset array of only number we will map over that new array and return value%3 which using the modulus, it returns the ramainder of a number.
// this willr turn an array of only the ramainders of the nubmer after being divided by 3
const onlyRemaindersbyof3 = (array) => {
  return array.filter((value) => {
    return typeof value === 'number'
  }).map((value)=>{return value%3})
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", ()=> {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
  it("Cube each index and return the sum of all indexs", ()=> {
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})
//---- TEST CASE FAILING WITH OUT FUNCTION------
// FAIL  ./code-challenges.test.js
//   ✕ Cube each index and return the sum of all indexs (1 ms)
// ● cubedSum › Cube each index and return the sum of all indexs
//   ReferenceError: cubedSum is not defined

//b) Create the function that makes the test pass.
//----Pseudo Code------
// Input: array
// Output: integer
//Create a function tcalled cubedSum that takes a parameter <array>
// create a variable using <let> (cannot use const because it will be changing) and set it equal to 0
// Use the build in method <forEach> to itterate through the array.(the reason we wont be using a higher order function map is because we want to return a number, not an array).
// within your foreEech loop you will be returning the sum += value and then cube it by using the ** operator.
// finally return the sum.

const cubedSum = (array) => {
  let sum = 0
  array.forEach((value)=> {
     return sum += value**3
  })
  return sum
}
//----TEST CASE PASSING WITH FUNCTION-----
// PASS  ./code-challenges.test.js
// cubedSum
//   ✓ Cube each index and return the sum of all indexs (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//---- ALL TEST CASES PASSING AT ONCE-----
// PASS  ./code-challenges.test.js
// capName
//   ✓ Return array of objects with names capped with sentence about person (4 ms)
// onlyRamindersbyof3
//   ✓ Cube each index and return the sum of all indexs (2 ms)
// cubedSum
//   ✓ Cube each index and return the sum of all indexs (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
