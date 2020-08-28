<template>
 <div>
 
  home
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
