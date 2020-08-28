<template>
  <div class="homebox">
    <div class="leftbox">
      <leftbox :leftarr="leftarr"></leftbox>
    </div>
    <div class="topbox">
      <topbox :toparr="toparr"></topbox>
      <div>
      <template>
        <router-view />
      </template>
    </div>
    </div>
    
  </div>
</template>

<script>
import topbox from "../../components/topbox/topbox";
import leftbox from "../../components/leftbox/leftbox";
export default {
  name: "",
  props: {},
  components: {
    topbox,
    leftbox
  },
  data() {
    return {
      toparr: [],
      leftarr: [],
      centerarr: []
    };
  },
  methods: {
    //获取所有信息
    getmenus() {
      this.$axios
        .get("http://49.233.66.125:3030/menu")
        .then(res => {
          if (res.data.code === 200) {
            //  let menus = res.data.data.menus
            res.data.data.menus.map(item => {
              item.menu_id = JSON.stringify(item.menu_id);
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