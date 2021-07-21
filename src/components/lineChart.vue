<template>
<div>
  <div ref="lineChart" style="width: 100%;height: 300px">
  </div>
</div>

</template>

<script>
export default {
  name: "lineChart",
  props:{
    xData:{
      type:Array,
      default: () => {return [] },
    }
  },
  data(){
    return{
      myChart:null,
      option:null
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize',this.handleResize)
  },
  methods:{
    init(){
      this.myChart = this.$echarts.init(this.$refs.lineChart)
      this.option = {
        xAxis: {
          type: 'category',
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      };
      this.option && this.myChart.setOption(this.option);
    },
    handleResize(){
      this.myChart&&this.myChart.resize()
    }

  },
  beforeDestroy() {
    this.myChart&&this.myChart.dispose()
    this.myChart = null
    window.removeEventListener("resize",this.handleResize)
  }
}
</script>

<style scoped>

</style>