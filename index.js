// question 1 
let marks = [70, 80, 65, 90, 85]
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log(sum);
// question 2
let arr =[12, 45, 2, 99, 34, 5]
let max = arr[0]; 
let min = arr[0]; 
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]; 
    }
    if (arr[i] < min) {
        min = arr[i]; 
    }
}
console.log("Max:", max); 
console.log("Min:", min);
// question 3
let names = ["Ali", "Ahmed", "Sara", "Fatima"];
let reversedNames = [];

for (let i = names.length - 1; i >= 0; i--) {
    reversedNames.push(names[i]);
}
console.log(reversedNames);
// question 4
let students = ["Zaid", "Hania", "Umar", "Hania", "Aiman"];
let count = 0; // Start with 0

for (let i = 0; i < students.length; i++) {
    if (students[i] === "Hania") {
        count++; 
    }
}
console.log(count); 
// question 5
let fruits = ["Apple", "Banana", "Guava"];
fruits.push("Mango"); 
fruits.pop();         
console.log(fruits);
// question 6
let cities = ["Karachi", "Lahore", "Islamabad"];
cities.unshift("Quetta"); 
cities.shift();           
console.log(cities); 
// question 7
let colors = ["Red", "Blue", "Yellow", "Green", "Black"];
colors.splice(2, 1, "White", "Purple"); 
console.log(colors);
// question 8
let items = ["Pen", "Book", "Copy", "Pencil", "Eraser", "Sharpener"]
let newArray = items.slice(1, 4); 
console.log(newArray); 
let pencilIndex = items.indexOf("Pencil");
if (pencilIndex !== -1) {
    items.splice(pencilIndex, 2, "Marker");
}
console.log(items); 
























































