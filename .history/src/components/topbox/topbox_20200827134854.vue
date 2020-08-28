<template>
  <div>
    <div>
    
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item v-for="(item,index) in toparr" :key="index" index="1">{{item.name}}</el-menu-item>
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