##How to Start
1. 透過Terminal，輸入```yarn install```(若沒有安裝yarn [請看這邊](https://yarnpkg.com/zh-Hans/docs/install#mac-stable))
2. 安裝完成後，輸入```yarn start```，即可透過瀏覽器在 http://localhost:3000/ 瀏覽

## Deploy to Surge.sh (optional)
1. 將做好的頁面部署在[surge.sh](https://surge.sh/)免費的服務上，方便大家瀏覽
2. 安裝Surge，[教學在此](https://surge.sh/help/getting-started-with-surge)
3. 在Terminal輸入```yarn build```進行編譯與優化，編譯完成檔案在```./build```這個folder
4. 輸入```cd build/```進到build資料夾，再輸入```surge```，按照指示即可成功部署


## File Structure
```
ELSA-LAB-WEBSITE
├── yarn.lock       // yarn 工具的檔案，非必要不碰
├── package.json    // 打包工具的檔案，非必要不碰
├── README.md       // 說明文件（就是你現在在看的）
├── .gitignore      // ignore ./build ，因為檔案太大了，而且不影響工作
├── public          // Seldom modify this folder
├── build           // 編譯過的檔案，deploy上主機要用這個資料夾下的檔案
└── src             // 平常編輯頁面用的都是這個資料夾底下的檔案
    ├── image       // 圖檔都放在這透過，import方式如下
    ├── index.js    
    ├── index.css   
    ├── registerServiceWorker.js
    ├── logo.svg
    ├── App.js      // layout 和 event handler都寫在這，建議可以拆成component
    ├── App.sass    // style寫在這，有安裝sass loader，每次儲存會自動編譯產生App.css
    ├── App.css     // 由App.sass編譯產生
    └── App.test.css
```

## Import Image
因為create-react-app這個package本身的限制，圖檔在.js用一般路徑的引用方法無法作用，需如下使用
1. 對任意圖檔，以一個component的方式import
```import AnyName from './image/image_file_name'```
2. 將component name放在src的地方
```<Image src={AnyName}>```

## Reference
1. [create-react-app](https://github.com/facebookincubator/create-react-app)
2. [Reactjs](https://reactjs.org/)
3. [React-Bootstrap](https://react-bootstrap.github.io/)
4. [Sass](https://sass-lang.com/)
5. 純CSS的視差滑動效果，參考文件：
   [CSS 3D](https://www.oxxostudio.tw/articles/201506/css-3d.html)
   [CSS parallax](https://codepen.io/eladrin201/pen/btLGH?editors=1100)

## Contact
8月底至12月初因為服兵役的關係，無法立即回覆，請見諒
E-mail: andykao1213@gmail.com
messenger: https://www.facebook.com/quanze.gao