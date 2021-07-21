<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="FinishAll"/>
    </label>
    <span>
          <router-link to="/list"><span> 全部任务{{$store.state.todos.length}}</span></router-link>
          <router-link to="/undonelist"><span>/未完成{{$store.getters.TodosUnDoneNumber}}</span></router-link>
          <router-link to="/donelist"><span>/已完成{{$store.getters.TodosDoneNumber}}</span></router-link>
        </span>
    <button class="btn btn-danger" @click="deleteAllDone">清除已完成任务</button>
  </div>
</template>

<script>
import "@/assets/css/Footer.css"
export default {
  name: "Footer",
  methods:{
    deleteAllDone(){
      this.$store.commit('deleteAllDone')
    },
    FinishAll(){
      this.$store.commit('FinishAll')
    },
  }
  }
</script>

<style scoped>

</style>