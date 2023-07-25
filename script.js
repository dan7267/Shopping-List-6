//Database containing all known meals and their ingredients
const meals_database =[
    {
        name: "Butter Chicken",
        ingredients: [
            {name: "Chicken", amount: 5},
            {name: "Butter", amount: 9}, 
            {name: "Cream", amount: 17}
        ]
    },
    {
        name: "Noodles",
        ingredients: [
            {name: "Noodles", amount: 19},
            {name: "Beef", amount: 3},
            {name: "Egg", amount: 15}
        ]
    },
    {
        name: "Pasta",
        ingredients: [
            {name: "Pasta", amount: 19},
            {name: "Pesto", amount: 3},
            {name: "Chilli flakes", amount: 15}
        ]
    }
]

selectedMeals = [];

function startingScreen() {
    const allMealsElement = document.getElementById("all-meals");
    meals_database.forEach(mealName => {
        const allMealElement = document.createElement("div");
        allMealElement.classList.add("all-meal");
        allMealsElement.appendChild(allMealElement)

        const allMealContentElement = document.createElement("div");
        allMealContentElement.classList.add("all-meal-content");
        allMealElement.appendChild(allMealContentElement);

        const allMealActionsElement = document.createElement("div");
        allMealActionsElement.classList.add("actions");

        const allMealSelectElement = document.createElement("button");
        allMealSelectElement.classList.add("select");
        allMealSelectElement.innerHTML = "Select";
        allMealSelectElement.dataset.mealId = mealName.name
        allMealSelectElement.addEventListener("click", selectingMeal);

        allMealActionsElement.appendChild(allMealSelectElement);
        allMealElement.appendChild(allMealActionsElement);
        allMealsElement.appendChild(allMealElement);
    
        const allMealText = document.createElement("input");
        allMealText.classList.add("text");
        allMealText.type = "text";
        allMealText.value = mealName.name;
        allMealText.setAttribute("readonly", "readonly");
        allMealContentElement.appendChild(allMealText);
    })
}

function selectingMeal(event) {
    const button = event.target;
    const mealId = button.dataset.mealId;

    const selectedMealsElement = document.getElementById("selected-meals");
    const selectedMealElement = document.createElement("div");
    selectedMealElement.classList.add("selected-meal");
    selectedMealsElement.appendChild(selectedMealElement)

    const selectedMealContentElement = document.createElement("div");
    selectedMealContentElement.classList.add("selected-meal-content");
    selectedMealElement.appendChild(selectedMealContentElement);

    const selectedMealActionsElement = document.createElement("div");
    selectedMealActionsElement.classList.add("selected-actions");

    const selectedMealDeleteElement = document.createElement("button");
    selectedMealDeleteElement.classList.add("selected-delete");
    selectedMealDeleteElement.innerHTML = "Delete";
    selectedMealDeleteElement.dataset.mealId2 = mealId;
    selectedMealDeleteElement.addEventListener("click", deletingMeal);

    selectedMealActionsElement.appendChild(selectedMealDeleteElement);
    selectedMealElement.appendChild(selectedMealActionsElement);
    selectedMealsElement.appendChild(selectedMealElement);

    const selectedMealText = document.createElement("input");
    selectedMealText.classList.add("text");
    selectedMealText.type = "text";
    selectedMealText.value = mealId;
    selectedMealText.setAttribute("readonly", "readonly");
    selectedMealContentElement.appendChild(selectedMealText);

    selectedMeals.push(mealId);
    alert(selectedMeals);

}

function deletingMeal(event) {
    const button = event.target;
    const mealId = button.dataset.mealId2;
    var index = selectedMeals.indexOf(mealId);
    if (index!==-1) {
        selectedMeals.splice(index, 1);
    }
    alert(selectedMeals);
    if (selectedMealElement.selectedMealContentElement.selectedMealText.value == mealId) {
        selectedMealsElement.removeChild(selectedMealElement);
    }
}

startingScreen();

/*

const allMealsElement = document.getElementById("all-meals");
let selectedMealsList = []

meals_database.forEach(mealName => {
    //Initialising all meals list with database
    const allMealElement = document.createElement("div");
    allMealElement.classList.add("all-meal");
    allMealsElement.appendChild(allMealElement)
    const allMealContentElement = document.createElement("div");
    allMealContentElement.classList.add("all-meal-content");
    allMealElement.appendChild(allMealContentElement);

    const allMealActionsElement = document.createElement("div");
    allMealActionsElement.classList.add("actions");
    const allMealSelectElement = document.createElement("button");
    allMealSelectElement.classList.add("select");
    allMealSelectElement.innerHTML = "Select";
    allMealActionsElement.appendChild(allMealSelectElement);
    allMealElement.appendChild(allMealActionsElement);
    allMealsElement.appendChild(allMealElement);
    
    const allMealText = document.createElement("input");
    allMealText.classList.add("text");
    allMealText.type = "text";
    allMealText.value = mealName.name;
    allMealText.setAttribute("readonly", "readonly");
    allMealContentElement.appendChild(allMealText);

    allMealSelectElement.addEventListener('click', () => {
        //Creating selected meals element when select button clicked on
        const selectedMealsElement = document.getElementById("selected-meals");
        const selectedMealElement = document.createElement("div");
        selectedMealElement.classList.add("selected-meal");
        selectedMealsElement.appendChild(selectedMealElement)
        const selectedMealContentElement = document.createElement("div");
        selectedMealContentElement.classList.add("selected-meal-content");
        selectedMealElement.appendChild(selectedMealContentElement);

        const selectedMealActionsElement = document.createElement("div");
        selectedMealActionsElement.classList.add("selected-actions");
        const selectedMealDeleteElement = document.createElement("button");
        selectedMealDeleteElement.classList.add("selected-delete");
        selectedMealDeleteElement.innerHTML = "Delete";
        selectedMealActionsElement.appendChild(selectedMealDeleteElement);
        selectedMealElement.appendChild(selectedMealActionsElement);
        selectedMealsElement.appendChild(selectedMealElement);
        const selectedMealText = document.createElement("input");
        selectedMealText.classList.add("text");
        selectedMealText.type = "text";
        selectedMealText.value = allMealText.value;
        selectedMealText.setAttribute("readonly", "readonly");
        selectedMealContentElement.appendChild(selectedMealText);

        //Changing select to select again to notify person that they have already selected it at least once
        if (allMealSelectElement.innerHTML.toLowerCase() == "select") {
            allMealSelectElement.innerHTML = "Select Again!";
        }
    })
})

function deletingMeal() {
//Function to move meal off of the selected meals list
}

*/