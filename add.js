// Get input arrays using prompt()
const namesInput = prompt("Enter names separated by commas:");
const agesInput = prompt("Enter ages separated by commas:");

// Convert input strings to arrays
const namesArray = namesInput.split(",");
const agesArray = agesInput.split(",").map(Number);

// Create a new multi-dimensional array
const restructuredArray = [];

// Iterate through both arrays and create subarrays
for (let i = 0; i < namesArray.length; i++) {
  restructuredArray.push([namesArray[i], agesArray[i]]);
}

// Log the restructured array
console.log("Restructured array:");
for (const subArray of restructuredArray) {
  console.log(subArray);
