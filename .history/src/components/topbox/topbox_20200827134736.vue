<template>
  <div>
    <div>
      <el-tabs v-model="activeindex" @tab-click="handleClick(item)">
        <el-tab-pane v-for="(item,index) in toparr" :key="index"
         :label="item.name" :name="item.name">{{item.name}}</el-tab-pane>
      </el-tabs>
      <el-menu
        default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu v-for="(item,index) in leftarr" :key="index" :index="item.name">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航1</span>
          </template>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    toparr: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      activeindex: '0'
    };
  },
  methods: {
    handleClick(item) {
      console.log(item);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>