# DrawClient - Tauri + React 绘图应用

这是一个基于 Tauri 和 React 构建的桌面绘图应用程序。Tauri 提供了轻量级的桌面应用框架，React 负责前端界面开发。

## 项目目录结构

```
DrawClient/
├── .gitignore                    # Git 忽略文件配置
├── .vscode/                      # VS Code 编辑器配置
│   └── extensions.json           # 推荐的 VS Code 扩展
├── README.md                     # 项目说明文档
├── index.html                    # 主 HTML 入口文件
├── package.json                  # Node.js 项目配置和依赖
├── package-lock.json             # 锁定的依赖版本
├── vite.config.js                # Vite 构建工具配置
├── public/                       # 静态资源目录
│   ├── tauri.svg                 # Tauri 图标
│   └── vite.svg                  # Vite 图标
├── src/                          # React 前端源码
│   ├── App.css                   # 主应用样式
│   ├── App.jsx                   # 主应用组件
│   ├── main.jsx                  # React 应用入口
│   └── assets/                   # 前端资源文件
│       └── react.svg             # React 图标
└── src-tauri/                    # Tauri 后端源码
    ├── .gitignore                # Tauri 专用 Git 忽略配置
    ├── Cargo.toml                # Rust 项目配置文件
    ├── Cargo.lock                # Rust 依赖锁定文件
    ├── build.rs                  # Rust 构建脚本
    ├── tauri.conf.json           # Tauri 应用配置
    ├── capabilities/             # Tauri 权限配置
    │   └── default.json          # 默认权限设置
    ├── icons/                    # 应用图标资源
    │   ├── icon.png              # 主图标
    │   ├── icon.ico              # Windows 图标
    │   ├── icon.icns             # macOS 图标
    │   └── [其他尺寸图标...]      # 各种尺寸的应用图标
    ├── src/                      # Rust 后端源码
    │   ├── main.rs               # Rust 应用入口
    │   └── lib.rs                # Rust 库文件
    ├── target/                   # Rust 编译输出目录
    └── gen/                      # 自动生成的文件
        └── schemas/              # API 模式定义
```

## 各部分作用说明

### 前端部分 (src/)
- **React + Vite**: 使用现代前端技术栈构建用户界面
- **App.jsx**: 主应用组件，包含绘图界面的核心逻辑
- **main.jsx**: React 应用的入口点，负责渲染根组件
- **App.css**: 应用的样式定义

### 后端部分 (src-tauri/)
- **Rust**: 使用 Rust 语言开发高性能的桌面应用后端
- **main.rs**: Tauri 应用的主入口，初始化窗口和系统集成
- **lib.rs**: 核心业务逻辑库，可能包含绘图相关的系统调用
- **tauri.conf.json**: 应用配置，包括窗口设置、权限、构建选项等

### 配置文件
- **package.json**: 定义前端依赖、脚本命令和项目元信息
- **Cargo.toml**: 定义 Rust 依赖和项目配置
- **vite.config.js**: Vite 构建工具的配置，优化开发和构建流程

### 资源文件
- **icons/**: 包含应用在不同平台的图标文件
- **public/**: 静态资源，在构建时会被复制到输出目录
- **assets/**: 前端组件使用的资源文件

## 开发环境设置

### 推荐的 IDE 配置
- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

### 环境要求
- Node.js (推荐 16+)
- Rust (通过 rustup 安装)
- 系统依赖 (根据目标平台而定)

### 开发命令
```bash
# 安装前端依赖
npm install

# 启动开发服务器
npm run tauri dev

# 构建应用
npm run tauri build
```

## 技术特点

- **跨平台**: 支持 Windows、macOS 和 Linux
- **轻量级**: Tauri 生成的应用体积小，内存占用低
- **现代化**: 使用最新的前端技术栈和 Rust 语言
- **安全性**: Tauri 提供了严格的安全模型和权限控制
- **性能**: Rust 后端提供高性能的系统集成能力
