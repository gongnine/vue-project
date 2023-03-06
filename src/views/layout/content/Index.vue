<template>
  <div>
    <!-- 顶部 -->
    <div class="header">
      <div class="open">
        <span
          v-if="!isCollapse"
          class="iconfont icon-right-indent"
          @click="changeMenu"
        ></span>
        <span
          v-else
          class="iconfont icon-left-indent"
          @click="changeMenu"
        ></span>
      </div>
    </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    changeMenu() {
      this.$emit("changeShow");
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background-color: #2885cc;
  color: #fff;
  line-height: 50px;
  .iconfont {
    font-size: 22px;
  }
}
</style>
