<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <!-- 右侧内容 -->
    <div class="content" :class="{ zhedie: isCollapse }">
      <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
    </div>
  </div>
</template>

<script>
import Content from "./content/Index.vue";
import Menu from "./menu/Index.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeShow() {
      this.isCollapse = !this.isCollapse;
    },
  },
  components: {
    Content,
    Menu,
  },
};
</script>

<style lang="less" scoped>
.layout {
  // display: flex;
  .menu {
    // width: 200px;
    background: #0c3b78;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
  }
  .content {
    // flex: 1;
    padding-left: 200px;
  }
  .zhedie {
    padding-left: 64px;
  }
}
</style>
