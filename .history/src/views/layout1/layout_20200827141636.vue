<template>
<div class="homebox">
      <div class="leftbox"><leftbox :leftarr='leftarr'></leftbox></div>
      <div class="topbox"><topbox :toparr='toparr'></topbox></div>
  </div>
</template>

<script>
import topbox from '../components/topbox/topbox'
import leftbox from '../components/leftbox/leftbox'
 export default {
   name: '',
   props: {
   },
   components: {
         topbox,
     leftbox
   },
   data () {
     return {
toparr:[],
       leftarr:[],
       centerarr:[]
     }
   },
   methods: {

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