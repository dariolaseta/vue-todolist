const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList : [
                {
                    text: "Fare la spesa;",
                    done: false
                },

                {
                    text: "Prenotare medico;",
                    done: false
                },

                {
                    text: "Cambiare lettiera.",
                    done: true
                }
            ]
        }
    },
    methods: {
        removeItem(index){
            this.todoList.splice(index, 1);
        },
        addItem(item){
            if(item != ''){
                const newItem = {
                    text: item,
                    done: false
                }

                this.todoList.push(newItem);
            }
        }
    }
}).mount("#list");