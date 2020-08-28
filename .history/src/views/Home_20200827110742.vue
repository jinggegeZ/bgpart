<template>
 <div>
  home
 </div>
</template>

<script>
import topbox from '../components/topbox/topbox'
import topbox from '../components/topbox/topbox'
 export default {
   name: "",
   props: {
   },
   components: {

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
