<template>
 <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,index) in toparr.slice(0,toparr.length-1)" :key="index" :index="String(index)">{{item.name}}</el-menu-item>
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
      menu_id:''
    };
  },
  methods: {
    handleSelect(index) {

        this.$router.push(key)
        this.menu_id = this.toparr[index].menu_id
        this.leftarrs= this.leftarr.filter((item) => {
          return item.parent_id == this.menu_id
        })
         console.log(this.leftarrs);
      },
      //  获取id
      // getitem(item){
      //   console.log(item);
      //   let menu_id = item.menu_id
      //   this.$bus.$emit('menu_id',menu_id)
      // }
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
    }
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