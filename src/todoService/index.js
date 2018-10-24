import { minSleepMs, maxSleepMs } from "./constants";

const todos = [
    {'id': 0, title: 'Buy ice cream', completed: false },
    {'id': 1, title: 'Buy rain coat', completed: false },
    {'id': 2, title: 'Eat ice cream in rain', completed: false },
];

const getSleepDuration = (min, max) => Math.floor((Math.random() * (max - min + 1) + min))
const sleep = () => new Promise(resolve => setTimeout(resolve, getSleepDuration(minSleepMs, maxSleepMs)));

const getTodoById = (id) => {
    return sleep().then(() => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex < 0) {
            return Promise.reject();
        }
        const todo = todos.find(todo => todo.id === id);
        return todo;
    });
}

const getTodos = () => {
    return sleep().then(() => {
        return [...todos];
    });
}

const toggleTodo = (todoId) => {
    return sleep().then(() => {
        const todoIndex = todos.findIndex(t => t.id === todoId);
        if (todoIndex < 0) {
            return Promise.reject();
        }
        const updatedTodo = { ...todos[todoIndex], completed: !todos[todoIndex].completed }
        todos[todoIndex] = updatedTodo;
        return updatedTodo;
    });
}
//added a more "unique" ID by adding title to todos.length
const addTodo = (title) => {
    return sleep().then(() => {
        const todo = { id: `${todos.length}${title}`, title, completed: false };
        todos.push(todo);
        return todo;
    });
}

const deleteTodo = (id) => {
    return sleep().then(() => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex < 0) {
            return Promise.reject();
        }
        todos.splice(todoIndex, 1);
    });
}

export default {
    addTodo,
    getTodos,
    toggleTodo,
    deleteTodo,
    getTodoById,
};

