<template>
  <div>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,index) in toparr" :key="index" :index="index">{{item.name}}</el-menu-item>
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
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>