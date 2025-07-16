# 贡献指南

感谢您对 DrawClient 项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复或新功能
- 🎨 UI/UX 改进

## 开始之前

在开始贡献之前，请确保您已经：

1. 阅读了项目的 [README.md](README.md)
2. 查看了现有的 [Issues](https://github.com/MarkBurt/Drawclient/issues) 和 [Pull Requests](https://github.com/MarkBurt/Drawclient/pulls)
3. 了解了项目的技术栈和架构

## 开发环境设置

### 环境要求

- Node.js 16+
- Rust 1.70+
- Git

### 本地开发

1. Fork 并克隆仓库
```bash
git clone https://github.com/MarkBurt/Drawclient.git
cd DrawClient
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run tauri dev
```

## 贡献流程

### 1. 报告 Bug

如果您发现了 Bug，请：

1. 检查是否已有相关的 Issue
2. 如果没有，请创建新的 Issue，包含：
   - 清晰的标题和描述
   - 重现步骤
   - 预期行为和实际行为
   - 系统环境信息
   - 截图或错误日志（如果适用）

### 2. 提出功能建议

1. 创建新的 Issue，标记为 "enhancement"
2. 详细描述功能需求和使用场景
3. 如果可能，提供设计草图或原型

### 3. 提交代码

1. **创建分支**
```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

2. **编写代码**
   - 遵循项目的代码风格
   - 添加必要的测试
   - 确保代码通过所有检查

3. **提交更改**
```bash
git add .
git commit -m "feat: add your feature description"
# 或
git commit -m "fix: fix your bug description"
```

4. **推送分支**
```bash
git push origin feature/your-feature-name
```

5. **创建 Pull Request**
   - 提供清晰的标题和描述
   - 关联相关的 Issue
   - 添加截图或演示（如果适用）

## 代码规范

### JavaScript/React

- 使用 ES6+ 语法
- 遵循 ESLint 配置
- 使用函数式组件和 Hooks
- 组件名使用 PascalCase
- 文件名使用 camelCase

### Rust

- 遵循 Rust 官方代码风格
- 使用 `cargo fmt` 格式化代码
- 使用 `cargo clippy` 检查代码质量
- 添加适当的文档注释

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
type(scope): description

[optional body]

[optional footer]
```

类型包括：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(ui): add dark mode support

fix(canvas): resolve drawing lag issue on high DPI displays

docs: update installation instructions
```

## 测试

在提交代码之前，请确保：

1. 所有现有测试通过
2. 新功能包含相应的测试
3. 代码覆盖率不降低

```bash
# 运行测试
npm test

# 运行 Rust 测试
cd src-tauri
cargo test
```

## 代码审查

所有的 Pull Request 都需要经过代码审查：

1. 至少一个维护者的批准
2. 所有 CI 检查通过
3. 解决所有审查意见

## 发布流程

项目使用语义化版本控制：

- `MAJOR`: 不兼容的 API 更改
- `MINOR`: 向后兼容的功能添加
- `PATCH`: 向后兼容的 Bug 修复

## 社区准则

请遵循我们的行为准则：

- 保持友善和尊重
- 欢迎新贡献者
- 建设性地提供反馈
- 专注于对项目最有利的事情

## 获得帮助

如果您需要帮助：

1. 查看项目文档
2. 搜索现有的 Issues
3. 在 Discussions 中提问
4. 联系维护者

## 致谢

感谢所有为 DrawClient 做出贡献的开发者！您的贡献让这个项目变得更好。

---

再次感谢您的贡献！🎉