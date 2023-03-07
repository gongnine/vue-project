<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="header">
      <div class="item">
        <span>销售额</span>
        <div class="num">57822</div>
        <div class="bottom">今日销售额度：</div>
      </div>
      <div class="item">
        <span>销售额</span>
        <div class="num">57822</div>
        <div class="bottom">今日销售额度：</div>
      </div>
      <div class="item">
        <span>销售额</span>
        <div class="num">57822</div>
        <div class="bottom">今日销售额度：</div>
      </div>
      <div class="item">
        <span>销售额</span>
        <div class="num">57822</div>
        <div class="bottom">今日销售额度：</div>
      </div>
    </div>
    <!-- 中间 -->
    <div class="content">
      <div class="time-info">
        <div class="title">月销售额</div>
        <div id="charts" style="width: 100%; height: 360px"></div>
      </div>
      <div class="area">地区分布</div>
    </div>

    <!-- 底部 -->
    <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最新内容</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增产品</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary">产品管理</el-button>
          <el-button>消息管理</el-button>
          <el-button>内容管理</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  background-color: #f5f5f5;
}
.header {
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  color: #fff;
  .item {
    width: 250px;
    height: 110px;
    background-color: orange;
    border-radius: 20px;
    position: relative;
    span {
      display: block;
      position: absolute;
      top: 15%;
      left: 9%;
    }
    .num {
      font-size: 20px;
      position: absolute;
      top: 40%;
      left: 13%;
    }
    .bottom {
      width: 100%;

      position: absolute;
      top: 70%;
      padding-left: 13%;
      padding-top: 5px;
      border-top: 1px solid white;
    }
  }
  .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
  }
  .item:nth-child(2) {
    background-image: linear-gradient(#409eff, #2e556e);
  }
  .item:nth-child(3) {
    background-image: linear-gradient(#b54fa8, #713c7a);
  }
  .item:nth-child(4) {
    background-image: linear-gradient(#1cd2f1, #39717a);
  }
}

.content {
  display: flex;
  margin: 20px;
  height: 400px;
  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }
  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }
}
.home-footer {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
  .box-card {
    flex: 1;
    margin-right: 30px;
    span {
      font-weight: 600;
    }
  }
}
</style>
