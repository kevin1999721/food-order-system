# Food Order System

此專案為簡單的點餐系統，首先從店家清單中選擇店家，選擇後會顯示該店家的 menu，你可以點擊 menu 上各個商品的新增按鈕，系統就會幫你加入至購物車，點擊購物車按鈕查看剛剛所新增的內容，在購物車裡可以新增、減少、移除商品，決定好了便可以送出清單，送出後點擊歷史清單按鈕查看剛剛送出的結果，而你也可以從這裡清除歷史清單。

# Technologies

***Server***
* express : ^4.18.2

***Client***
* react : ^18.2.0
* react-dom : ^18.2.0
* react-redux : ^8.1.1
* reduxjs/toolkit : ^1.9.5
* mui/material : ^5.14.0
* typescript : ^5.1.6
* webpack : ^5.88.1
* babel/core : ^7.22.7
* jest : ^29.6.1
* testing-library/react : ^14.0.0
# Installation

專案使用 npm 作為套件管理工具，並將 server 及 client 分開放置個別的資料夾，所以您需到個別的目錄輸入 npm install ，來安裝個別需要的 package。

另外也需要在根目錄 ./food-order-system 輸入 npm install 來安裝 package，這裡所安裝套件是 " concurrently "，目的是為了幫助我們同時啟動 server 及 client，這樣就不用到個別的目錄來啟動。

#### 分別進入 ./food-order-system 、 ./food-order-system/server 、 ./food-order-system/client 安裝 package 。

```bash
npm install
```

### Scripts

#### root ( ./food-order-system )
```bash
npm start  # 同時啟動 server 及 client  
npm run server # 啟動 server
npm run client # 啟動 client

```
#### server ( ./food-order-system/server )

```bash
npm start # 啟動 server
```

#### client ( ./food-order-system/client )

```bash
npm start  # 啟動 client
npm run test  # 使用 jest 進行測試
npm run build  # build 專案至 ./food-order-system/client/dist
```
***server 運行在 http://localhost:3000/***

***client 運行在 http://localhost:8080/***

# Logs
### test/issues-1 ( 2023/07/17 )
* 使用 jest、testing-library/react 進行測試
* 完成 redux reducer、select 測試
* 完成 component 測試

### build/issues-1 ( 2023/07/16 )
* 使用 express 建置 server api
* 配置環境 webpack、babel、typescript
* 使用 react、reduxjs/toolkit、mui、typescirpt 進行開發
* 完成主要功能 Menu、Cart、History
