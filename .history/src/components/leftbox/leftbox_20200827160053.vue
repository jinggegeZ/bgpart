<template>
  <div>
      <el-menu
        default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu v-for="(item,index) in leftarr" :key="index" :index="item.url">
          <div v-if="id === item.parent_id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group></div>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: "",
  props: {
      leftarr:{
          type:Array
      }
  },
  components: {},
  data() {
    return {
        id:''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
      this.$bus.$on('menu_id',(data) => {
          console.log(data);
          if(data){
              this.id = data
          }
      })
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>