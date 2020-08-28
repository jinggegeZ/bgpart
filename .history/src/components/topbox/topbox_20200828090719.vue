<template>
 <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item v-for="(item,index) in toparr.slice(0,toparr.length-1)" :key="index" :index="item.url">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
</template>

<script>

export default {
  name: "",
  props: {
  },
  components: {},
  data() {
    return {
      activeIndex: '/index',
      toparr: [],
      leftarr: [],
      leftarrs:[],
      centerarr: [],
    };
  },
  methods: {
    addchildren(arr1,arr2){
      arr1.map(item1 => {
        this.$set(item1, 'children' ,[])
        arr2.map(item2 => {
          if(item2.parent_id === item1.menu_id){
            item1.children.push(item2)
          }
        })
      })
    },
      //获取所有信息
    getmenus() {
      this.$axios
        .get("http://49.233.66.125:3030/menu")
        .then(res => {
          if (res.data.code === 200) {
            //  let menus = res.data.data.menus
            res.data.data.menus.map(item => {
              if (item.level === 0) {
                this.toparr.push(item);
              }
              if (item.level === 1) {
                this.leftarr.push(item);
                
              }
              if (item.level === 2) {
                this.centerarr.push(item);
              }
              
            });
            
            console.log(this.toparr);
            console.log(this.leftarr);
           
            console.log(this.centerarr);
          }
        })
        .catch(err => {
          console.log(err);
        });

      
    },
      handleSelect(key) {
      let index = this.toparr.findIndex((item) => {
        return item.url === key
      })
    
        let menu_id = this.toparr[index].menu_id
        this.leftarrs= this.leftarr.filter((item) => {
          return item.parent_id == menu_id
        })
         console.log(this.leftarrs);
         this.$bus.$emit('leftarrs',this.leftarrs)
      },
    
  },

  mounted() {
    this.getmenus();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>