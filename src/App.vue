<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
      </div>
    </div>
    <line-chart :xData="xData"></line-chart>
  </div>
</template>

<script>
import Header from "@/components/Header";
import lineChart from "@/components/lineChart";
import Footer from "@/components/Footer";
import "@/assets/css/App.css"
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    lineChart
  },
  data(){
    return{
      xData:['1','Tus','Wed','Thu','Fri','Sat','Sun']
    }
  }
}
</script>

