<template>
  <div>
    <div>
      <el-tabs v-model="activeindex" @tab-click="handleClick(item)">
        <el-tab-pane v-for="(item,index) in toparr" :key="index"
         :label="item.name" :name="item.name">{{item.name}}</el-tab-pane>
      </el-tabs>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
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