### 运行

``` bash

# 开发版本，用于开发使用，热加载
yarn run dev

# 生产版本，对代码进行混淆压缩，提取公共代码，分离css文件
yarn run build

# 生产版本并查看包分析器报告
yarn run build --report

# 单元测试
yarn run unit

# e2e测试
yarn run e2e

# 所有测试
yarn test

#安装jsx
npm install postcss-loader autoprefixer babel-loader babel-core

#chromedriver问题
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver


#导出为EXCEL 
npm install --save xlsx file-saver

import FileSaver from 'file-saver'
import XLSX from 'xlsx'
```

### 访问
在浏览器地址栏输入[http://localhost:8081/](http://localhost:8081/)

