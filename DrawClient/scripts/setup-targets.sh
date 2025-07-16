#!/bin/bash

# 跨平台构建目标安装脚本
# 此脚本将安装所有支持的Rust构建目标

echo "🚀 安装跨平台构建目标..."
echo ""

# 检查 rustup 是否已安装
if ! command -v rustup &> /dev/null; then
    echo "❌ 错误: rustup 未安装"
    echo "请先安装 Rust: https://rustup.rs/"
    exit 1
fi

echo "📦 安装 macOS 目标..."
rustup target add aarch64-apple-darwin    # M系列芯片
rustup target add x86_64-apple-darwin     # Intel Mac

echo "📦 安装 Windows 目标..."
rustup target add x86_64-pc-windows-msvc  # Windows x64
rustup target add aarch64-pc-windows-msvc # Windows ARM64

echo "📦 安装 Linux 目标..."
rustup target add x86_64-unknown-linux-gnu   # Linux x64
rustup target add aarch64-unknown-linux-gnu  # Linux ARM64

echo ""
echo "✅ 所有构建目标安装完成!"
echo ""
echo "📋 已安装的目标:"
rustup target list --installed | grep -E "(apple|windows|linux)"
echo ""
echo "🎯 现在您可以使用以下命令构建不同平台:"
echo "  npm run tauri:build:mac-arm64     # Mac M系列"
echo "  npm run tauri:build:mac-intel     # Mac Intel"
echo "  npm run tauri:build:windows       # Windows x64"
echo "  npm run tauri:build:linux         # Linux x64"
echo "  npm run tauri:build:all-platforms # 所有平台"
echo ""
echo "📖 更多信息请查看 BUILD_GUIDE.md"