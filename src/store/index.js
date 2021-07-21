import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    todos:[
        {id:'001',name:'吃饭',done:false},
        {id:'002',name:'睡觉',done:false},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'逛街',done:false}
    ],
    flag:true
}
const mutations = {
    addTodo(state,todoObj){
        const {todos} = state
        const newTodos = [todoObj,...todos]
        state.todos = newTodos
        localStorage.setItem("todolist",JSON.stringify(newTodos))
    },
    deleTodo(state,id){
        state.todos.splice(state.todos.findIndex(item => item.id === id), 1)//删除这一项内容
        // console.log(newTodos)
        // state.todos = newTodos
        localStorage.setItem("todolist",JSON.stringify(state.todos))
    },
    handleCheck(state,payload) {
        const {todos} = state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === payload.id)
            {
                // Vue.set(todos,'done',payload.done)
                return {...todoObj,done:payload.done}
            }

            else return todoObj
        })
        state.todos = newTodos
        localStorage.setItem("todolist",JSON.stringify(newTodos))
    },
    deleteAllDone(state){
        const newTodos = state.todos.filter(item => item.done == false)
        state.todos =newTodos
        localStorage.setItem("todolist",JSON.stringify(newTodos))
    },
    FinishAll(state) {
        if(state.flag){
            state.todos.map((item) => {
                item.done = true
            })
            state.flag = !state.flag
            localStorage.setItem("todolist",JSON.stringify(state.todos))
        }
        else{
            state.todos.map((item) => {
                item.done = false
            })
            state.flag = !state.flag
            localStorage.setItem("todolist",JSON.stringify(state.todos))
        }

    }
}
const getters = {
    TodosDoneNumber(state){
        let count = 0
       state.todos.map((item)=>{
            if(item.done){
                count ++
            }
        })
            return count

    },
    TodosDone(state){
        const newTodos = state.todos.filter(item => item.done == true)
        return newTodos
    },
    TodosUnDone(state){
        const newTodos = state.todos.filter(item => item.done == false)
        return newTodos
    },
    TodosUnDoneNumber(state){
        let count = 0
        state.todos.map((item)=>{
            if(!item.done){
                count ++
            }
        })
        return count

    }

}
const store = new Vuex.Store({
    state,
    mutations,
    getters
})
export default store