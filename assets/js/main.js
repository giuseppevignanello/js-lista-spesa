// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.



// create array with shopping list items inside 

const shoppingList = [
    "Avocado",
    "Toothpaste",
    "Chicken breast",
    "Paper towels",
    "Blueberries"
]


//take an element list from HTML and save it in a variable  
let shoppingListSection = document.querySelector("ul"); 

//create a while loop to slide the array

i = 0 

while(i<shoppingList.length) {
    // create an element for HTML 
   
    
    let listItem = document.createElement("ul"); 
     // add element from array in HTMLelement 
     listItem.append(shoppingList[i]); 
     //append the element to HTMLlist 
     shoppingListSection.append(listItem)
    
    

    i++
}
    


// tools
// - console.log();
// getElementbyID/querySelector
//array
// while
//let-const
