//搭建express服务
const express = require("express");
const app = express();

//产品路由
const router = require("./router");
app.use("/", router);

//测试接口
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("8000");
});
