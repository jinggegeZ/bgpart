<template>
 <div>
    <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(item,index) in toparr" :key="index" :label="item.name" name="first">{{item.name}}</el-tab-pane>
  </el-tabs>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       
   },
   components: {

   },
   data () {
     return {
         activeName:1
     }
   },
   methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>