<template>
  <ul class="todo-main">
    <li v-for=" item in $store.getters.TodosDone" :key="item.id">

      <input type="checkbox"  @change="event => handleCheck(item.id,event)" :checked="item.done">
      <span :class="{'done':item.done}">{{item.name}}</span>
      <button class="btn btn-danger" @click="deleTodo(item)">删除</button>

    </li>
  </ul>
</template>

<script>
// import Item from "@/components/Item";
import "@/assets/css/List.css"
import "@/assets/css/Item.css"
export default {
  name: "List",
  components:{
    // Item
  },
  methods:{
    deleTodo(item){
      this.$store.commit('deleTodo',item.id)
      console.log(item.id)
    },
    handleCheck(id,event){
      this.$store.commit('handleCheck', {id:id,done:event.target.checked})
    }
  },
  created() {
    localStorage.setItem("donelist",JSON.stringify(this.$store.getters.TodosDone))
  }
}
</script>

<style scoped>

</style>