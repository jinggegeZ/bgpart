<template>
  <div>
       <el-menu
        :default-active="$route.path"
        unique-opened
        router>
      <template v-for="item in menus">
        <el-submenu
            :index="item.url"
            :key="`${_uid}_${item.url}`"
            v-if="item.children && item.children.length > 0"
        >
          <template slot="title">
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
                :index="child.url"
                v-for="child in item.children"
                :key="child.url"
            >
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.url" :key="item.url" v-else>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
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
    handleOpen(key) {
      console.log(key);
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