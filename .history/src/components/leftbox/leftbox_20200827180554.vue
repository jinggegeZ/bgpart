<template>
  <div>
      <el-menu
        default-active="1-1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose">
        <el-submenu v-for="(item,index) in leftarrs" :key="index" :index="item.url">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
        id:'',
        leftarrs:[],
        leftarrss:[]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
       let index = this.leftarrs.findIndex((item) => {
        return item.url === key
      })
    
        let menu_id = this.toparr[index].menu_id
        this.leftarrss= this.leftarr.filter((item) => {
          return item.parent_id == menu_id
        })
        console.log(this.leftarrss);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
      this.$bus.$on('leftarrs',(data) => {
          console.log(data);
          if(data){
              this.leftarrs = data
          }
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>