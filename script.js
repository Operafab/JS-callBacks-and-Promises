
// Write the operations wit both callbacks and promises.

//simulate the cooking process with two steps: preparing ingredients and coooking them

//create a function prepareIngredients that takes a callback,simulate delay of 2seconds and print "ingredients prepared", call the callback function

//create function "cookMeal", simulate the delay of 3seconds and print the message: "Meal cooked", and callbacK the function.

// Simulate eating meal after both tasks are completed  by printing : "Meal is ready to eat!"



// CALLBACK OPERATION

// "prepareIngredients" function using a callback function
const prepareIngredients=(callback)=>{
  
  console.log("Ingredient preparation starting soon");
  setTimeout(()=>{
    console.log("Ingredients prepared")
    callback()
  },2000)
}

//cookMeal function  to be used as a callback function in the operation
const cookMeal=(callback)=>{
  setTimeout(()=>{
     console.log("Meal cooked")
     callback()
   },3000)}

// final simulation in the process : "eating meal"
   const eatingMeal =()=>{
     setTimeout(()=>{
       console.log("Meal is Ready to eat!")
       console.log("Enjoy your Meal!")
    },4000)
    }
//simulation of the functions  
  prepareIngredients(()=>{
   cookMeal(()=>{
     eatingMeal(()=>{})
   })}
  );

    
    
// PROMISE METHOD FOR COOKING A MEAL
//The promise method allows us to avoid a callback hell 

  
const prepareIngredients2 = () => {
  console.log("Ingredient preparation starting soon");
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Ingredients prepared");
          resolve();
      }, 2000);
  });
}

const cookMeal2 = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Meal cooked");
          resolve();
      }, 3000);
  });
}

const eatingMeal2 = () =>{
  return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Meal is Ready to eat!");
          resolve();
      }, 4000);
  });
}

// Using then to declare the callback functions
prepareIngredients2()
  .then(cookMeal2)
  .then(eatingMeal2)
  .then(() => {
      console.log("Enjoy your meal!");
  });

