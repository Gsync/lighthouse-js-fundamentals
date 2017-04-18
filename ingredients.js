var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop to print out each item
var length = ingredients.length;
var i = 0;

console.log("//while loop to print out each item")

while (i < length) {

  console.log(ingredients[i]);
  i++;
}

//for loop to print out each item
console.log("//for loop to print out each item")

for (i = 0; i < length; i++) {
  console.log(ingredients[i]);
}

//for loop to print out each item backwards
console.log("//for loop to print out each item backwards")

for (i = length-1; i >= 0; i--) {
  console.log(ingredients[i]);
}