<template>
 <div>
  <div class="homebox">
      <div class="leftbox"><leftbox :leftparr='leftparr'></leftbox></div>
      <div class="topbox"><topbox :top='top'></topbox></div>
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
       toparr:[],
       leftparr:[],
       centerarr:[]
     }
   },
   methods: {

   },
   mounted() {
     this.$axios.get("http://49.233.66.125:3030/menu").then(res => {
       if(res.data.code === 200) {
        //  let menus = res.data.data.menus
         res.data.data.menus.map((item) =>{
           if(item.level === 0){
             
             this.toparr.push(item)
            }
            if(item.level === 1){
              
             this.leftparr.push(item)
            }
            if(item.level === 2){
              
             this.centerarr.push(item)
            }
         })
         console.log(this.toparr);
         console.log(this.leftparr);
         console.log(this.centerarr);
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
