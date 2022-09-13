Vue.createApp({
    data() {
        return {
            todos: [],
            addTaskName: '',
            hideCompleted: false,
            textToFilter: ''
        }
    },

    methods: {
        addTodo() {

            console.log("Add: ", this.addTaskName)

            // Actualizamos el estado
            const id = uuid.v1();

            this.todos.push({
                id,
                text: this.addTaskName,
                done: false
            });

            this.addTaskName = "";

        },

        removeItem(id) {
            console.log(id);
            this.todos = this.todos.filter(todo => todo.id != id);
        },

        toggleCompleted(id) {
            console.log("complete: ", id)

            this.todos = this.todos.map(todo => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        },

        mustHideTask(done, text) {
            return (done && this.hideCompleted) || !text.includes(this.textToFilter);
        }

    }
}).mount('#app')