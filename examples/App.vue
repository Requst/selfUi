<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo></Demo>
    <Card
      imgSrc="https://t7.baidu.com/it/u=918697539,2969521817&fm=218&app=126&f=JPEG?w=121&h=75&s=5606DF044C424AD04A942CC40300E098"
      summary="全局视角系统学习《推荐系统》，实战中提升竞争力"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 3人报名</div>
          <div class="price">￥328.00</div>
        </div>
      </template>
    </Card>

    <Card
      imgSrc="https://fc1tn.baidu.com/it/u=3407382016,2699973079&fm=202&mola=new&crop=v1"
      :width="400"
      :imgHeight="200"
    >
      summary="全局视角系统学习《推荐系统》，实战中提升竞争力1"
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 3人报名</div>
          <div class="price">￥328.00</div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  text-align: left;
  .level {
    display: block;
    color: #9199a1;
    font-size: 12px;
    margin-bottom: 8px;
    padding: 0 8px;
  }
  .price {
    color: #f01414;
    line-height: 20px;
    font-size: 12px;
    line-height: 18px;
    padding: 0 8px;
    margin-bottom: 18px;
  }
}
</style>
