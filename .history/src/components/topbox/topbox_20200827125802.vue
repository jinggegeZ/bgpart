<template>
  <div>
    <div>
      <el-tabs
        v-model="activeindex"
        @tab-click="handleClick"
        
      >
        <el-tab-pane v-for="(item,index) in toparr"
        :key="index" :label="item.name" :name="item.sort">{{item.name}}</el-tab-pane>
      </el-tabs>
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
      activeindex: "0"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>