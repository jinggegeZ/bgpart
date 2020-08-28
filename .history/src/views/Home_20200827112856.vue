<template>
 <div>
  <div class="homebox">
      <div class="leftbox"><leftbox></leftbox></div>
      <div class="topbox"><topbox></topbox></div>
  </div>
 </div>
</template>

<script>
import topbox from '../components/topbox/topbox'
import leftbox from '../components/leftbox/leftbox'
 export default {
   name: "",
   props: {
   },
   components: {
     topbox,
     leftbox
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
     this.$axios.get("http://49.233.66.125:3030/menu").then(res => {
       if(res.data.code === 200) {
         let menu = res.data.
         //获取层级为0 的数组
         let arr1 =[]
         let item
       }



       console.log(res);
     }).catch(err => {
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
