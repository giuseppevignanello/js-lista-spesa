// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.



//  create array with shopping list items inside 

 const shoppingList = [
      "Avocado",
      "Toothpaste",
      "Chicken breast",
      "Paper towels",
      "Blueberries"
 ];


 let shoppingListSection = document.querySelector("ul");


 i = 0

 while (i < shoppingList.length) {
     // create an element for HTML 
     let listItem = document.createElement("li");
     // add element from array in HTMLelement 
     listItem.append(shoppingList[i]);
     //append the element to HTMLlist 
     shoppingListSection.append(listItem)
     i++
 }

//take an element list from HTML and save it in a variable  


//create a while loop to slide the array
const newItem = document.querySelector("input");
const submitEl = document.getElementById("submit");


submitEl.addEventListener("click",

    function () {
        let newListItem = document.createElement("li");
        newListItem.append(newItem.value);
        shoppingListSection.append(newListItem);
        console.log(newItem.value);
        newItem.value = ""
      
        
    }

)





// tools
// - console.log();
// getElementbyID/querySelector
//array
// while
//let-const
