<template>
  <div class="todo-header">
    <input type="text" placeholder="请添加你的内容" @keyup.enter="handleKeyUp">
  </div>
</template>

<script>
import "@/assets/css/Header.css"
import {nanoid} from 'nanoid'
export default {
  name: "Header",
  methods:{
    handleKeyUp(event){
      const {target} = event
      if(target.value.trim() === ''){
        alert('输入不能为空')
        return
      }
      const todoObj = {id:nanoid(),name:target.value,done:false}
      //将todoObj传递给App
      this.$store.commit('addTodo',todoObj)
    }
  }
}
</script>