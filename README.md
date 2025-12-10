# Planet Wallet Prototype

这是一个基于 React 的 Web 端移动钱包高保真原型。

## 技术栈 (Tech Stack)

本项目采用纯前端技术栈，无需复杂的构建工具（如 Webpack/Vite），直接在浏览器中编译运行。

-   **核心框架**: React 18 (通过 CDN 引入)
-   **UI 渲染**: ReactDOM 18
-   **JSX 编译**: Babel Standalone (浏览器端实时编译)
-   **样式**: 原生 CSS3 (使用 Flexbox 布局与 CSS 变量)
-   **图标库**: 自定义 SVG 组件

## 目录结构

```
d:\wallet\prototype\
├── index.html          # 入口文件，包含 CDN 链接和脚本引用顺序
├── styles.css          # 全局样式定义
├── README.md           # 项目说明文档
└── js/
    ├── App.js          # 根组件与路由逻辑
    ├── globals.js      # 全局变量与 Context
    ├── components/     # 可复用 UI 组件 (Button, Card, Icon 等)
    ├── pages/          # 各个功能页面 (首页, 资产, 交易等)
    └── utils/          # 工具函数
```

## 运行项目 (How to Run)

由于使用了 ES6+ 语法和 JSX，通过 `file://` 协议直接打开 `index.html` 可能会遇到跨域（CORS）或模块加载问题。建议使用本地静态服务器运行。

### 方法 1: 使用 Python (推荐)

如果你已安装 Python，可以在项目根目录下运行：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 方法 2: 使用 Node.js (http-server)

如果你已安装 Node.js，可以使用 `http-server`：

```bash
npx http-server .
```

## 打开界面

启动服务器后，打开浏览器访问：

[http://localhost:8000](http://localhost:8000)

推荐使用 Chrome 或 Edge 浏览器的移动端模拟模式（F12 -> 切换设备工具栏 -> 选择 iPhone 14 Pro 等设备）以获得最佳体验。

## 原型功能

本项目主要演示 Planet 钱包的核心流程，包括：

-   **钱包管理**: 创建/导入钱包（助记词、私钥）、多钱包切换
-   **资产管理**: 代币列表、发送、接收、交易记录
-   **理财功能**: 质押挖矿、赎回、收益查看
-   **交易功能**: 闪兑 (Swap)、法币买币
-   **发现/生态**: DApp 浏览器、新闻资讯、任务中心
