<template>
 <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,index) in toparr.slice(0,toparr.length-1)" :key="index" :index="item.url" @click="getitem(item)">{{item.name}}</el-menu-item>
      </el-menu>
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
      activeIndex: '/index',
      leftarr:[]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        this.$router.push(key)
        console.log(key, keyPath);
      },
      //  获取id
      getitem(item){
        console.log(item);
        let menu_id = item.menu_id
        this.$Eventbus.$emit('menu_id',menu_id)
      }
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>