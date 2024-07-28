var carrotNum;
var strawberryNum;
var lettuceNum;
var pizzaNum;
var tutuNum;
var sunhatNum;
var sunglassesNum;
var chainNum;
var coatNum;
var coinTotal = 0;

function checkEnoughCoin(itemNum) {
    if (coinTotal) {
        return true;
    }
    return false;
}


/* for the carrot */
function carrotMinus() {

    var element = document.getElementById("carrot-value");
    carrotNum = element.innerHTML;
    --carrotNum;
    document.getElementById("carrot-value").innerHTML = carrotNum;


    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;


}

function carrotPlus() {
    var element = document.getElementById("carrot-value");
    carrotNum = element.innerHTML;
    ++carrotNum;
    console.log(carrotNum);
    document.getElementById("carrot-value").innerHTML = carrotNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;


}

/* for the strawberry */
function strawberryMinus() {
    var element = document.getElementById("strawberry-value");
    strawberryNum = element.innerHTML;
    --strawberryNum;
    console.log(strawberryNum);
    document.getElementById("strawberry-value").innerHTML = strawberryNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function strawberryPlus() {
    var element = document.getElementById("strawberry-value");
    strawberryNum = element.innerHTML;
    ++strawberryNum;
    console.log(strawberryNum);
    document.getElementById("strawberry-value").innerHTML = strawberryNum;
    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the lettuce */
function lettuceMinus() {
    var element = document.getElementById("lettuce-value");
    lettuceNum = element.innerHTML;
    --lettuceNum;
    console.log(lettuceNum);
    document.getElementById("lettuce-value").innerHTML = lettuceNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function lettucePlus() {
    var element = document.getElementById("lettuce-value");
    lettuceNum = element.innerHTML;
    ++lettuceNum;
    console.log(lettuceNum);
    document.getElementById("lettuce-value").innerHTML = lettuceNum;
    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the pizza */
function pizzaMinus() {
    var element = document.getElementById("pizza-value");
    pizzaNum = element.innerHTML;
    --pizzaNum;
    console.log(pizzaNum);
    document.getElementById("pizza-value").innerHTML = pizzaNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function pizzaPlus() {
    var element = document.getElementById("pizza-value");
    pizzaNum = element.innerHTML;
    ++pizzaNum;
    console.log(pizzaNum);
    document.getElementById("pizza-value").innerHTML = pizzaNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the sunhat */
function sunhatMinus() {
    var element = document.getElementById("sunhat-value");
    sunhatNum = element.innerHTML;
    --sunhatNum;
    console.log(sunhatNum);
    document.getElementById("sunhat-value").innerHTML = sunhatNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function sunhatPlus() {
    var element = document.getElementById("sunhat-value");
    sunhatNum = element.innerHTML;
    ++sunhatNum;
    console.log(sunhatNum);
    document.getElementById("sunhat-value").innerHTML = sunhatNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the tutu */
function tutuMinus() {
    var element = document.getElementById("tutu-value");
    tutuNum = element.innerHTML;
    --tutuNum;
    console.log(tutuNum);
    document.getElementById("tutu-value").innerHTML = tutuNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function tutuPlus() {
    var element = document.getElementById("tutu-value");
    tutuNum = element.innerHTML;
    ++tutuNum;
    console.log(tutuNum);
    document.getElementById("tutu-value").innerHTML = tutuNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the sunglasses */
function sunglassesMinus() {
    var element = document.getElementById("sunglasses-value");
    sunglassesNum = element.innerHTML;
    --sunglassesNum;
    console.log(sunglassesNum);
    document.getElementById("sunglasses-value").innerHTML = sunglassesNum;
    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function sunglassesPlus() {
    var element = document.getElementById("sunglasses-value");
    sunglassesNum = element.innerHTML;
    ++sunglassesNum;
    console.log(sunglassesNum);
    document.getElementById("sunglasses-value").innerHTML = sunglassesNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the chain */
function chainMinus() {
    var element = document.getElementById("chain-value");
    chainNum = element.innerHTML;
    --chainNum;
    console.log(chainNum);
    document.getElementById("chain-value").innerHTML = chainNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function chainPlus() {
    var element = document.getElementById("chain-value");
    chainNum = element.innerHTML;
    ++chainNum;
    console.log(chainNum);
    document.getElementById("chain-value").innerHTML = chainNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

/* for the crown */
function crownMinus() {
    var element = document.getElementById("crown-value");
    crownNum = element.innerHTML;
    --crownNum;
    console.log(crownNum);
    document.getElementById("crown-value").innerHTML = crownNum;

    document.getElementById("coin-total").innerHTML = coinTotal + 3;
    coinTotal += 3;
}

function crownPlus() {
    var element = document.getElementById("crown-value");
    crownNum = element.innerHTML;
    ++crownNum;
    console.log(crownNum);
    document.getElementById("crown-value").innerHTML = crownNum;

    document.getElementById("coin-total").innerHTML = coinTotal - 3;
    coinTotal -= 3;
}

//**********************************START OF JS FOR TO DO LIST **************************/

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".add-bttn");
const deleteButton = document.getElementById("delete-button");

document.addEventListener("DOMContentLoaded", function(){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteTasks);
    displayTasks();
});

function addTask(){
    const newTask = todoInput.value.trim();
    if(newTask !== ""){
        todo.push({
            text: newTask, 
            disabled: false,
        });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}

function deleteTasks(){
    todo = [];
    saveToLocalStorage();
    displayTasks();
}

function displayTasks(){
    todoList.innerHTML = "";
    todo.forEach((item, index) => {
        const e = document.createElement("e");
        e.innerHTML = `
            <div class = "todo-container">
                <input type="checkbox" class = "todo-checkbox" id = "input-${index}" ${item.disabled ? "checked" : ""}>
            <p id = "todo-${index}" class = "${item.disabled ? "disabled" : ""}">
            ${item.text}
            </p> 
            </div>
        `;
        e.querySelector(".todo-checkbox").addEventListener("change", ()=> {
            toggleTask(index);
    });
        todoList.appendChild(e);
    });
    todoCount.textContent = todo.length;
}

function toggleTask(index){
    if(!todo[index].disabled){
        todo[index].disabled = !todo[index].disabled;

        coinTotal += 10;
        document.getElementById("coin-total").innerHTML = coinTotal;
    }
    saveToLocalStorage();
    displayTasks();
}

function saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todo));
}