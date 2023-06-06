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
    }
}).mount("#list");