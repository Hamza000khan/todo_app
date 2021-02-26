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

            todoObjectList.unshift(todoObject);
            this.display();
            document.querySelector("#myInput").value = '';

        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item) => item.id == z);

        todoObjectList.splice(selectedDelIndex, 1);

        this.display();
    }












