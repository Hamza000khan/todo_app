// DataStorage for the todo objects
const todoObjectList = [];



// Initiation of the Todo Class
class TodoClass {
    constructor(item) {
        this.ulElement = item;
    }

    add() {
        const todoInput = document.querySelector("#myInput").value;
        if (todoInput == "") {
            alert("You did not enter any item!")
        } else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }










