# 快递开始

#### 安装组件库

```bash
npm i self-ui4
```

#### 引用组件库

>在 main.js 中引用组件库
```javascript
// 全部引入
import 'self-ui4/dist/css/index.css'
import MUI from 'self-ui4'
Vue.use(MUI)

// 按需要引入
import 'self-ui4/dist/css/index.css'
import { Card } from 'self-ui4'
Vue.use(Card)
```