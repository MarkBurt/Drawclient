# 跨平台构建目标安装脚本 (PowerShell)
# 此脚本将安装所有支持的Rust构建目标

Write-Host "🚀 安装跨平台构建目标..." -ForegroundColor Green
Write-Host ""

# 检查 rustup 是否已安装
if (!(Get-Command rustup -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: rustup 未安装" -ForegroundColor Red
    Write-Host "请先安装 Rust: https://rustup.rs/" -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 安装 macOS 目标..." -ForegroundColor Blue
rustup target add aarch64-apple-darwin    # M系列芯片
rustup target add x86_64-apple-darwin     # Intel Mac

Write-Host "📦 安装 Windows 目标..." -ForegroundColor Blue
rustup target add x86_64-pc-windows-msvc  # Windows x64
rustup target add aarch64-pc-windows-msvc # Windows ARM64

Write-Host "📦 安装 Linux 目标..." -ForegroundColor Blue
rustup target add x86_64-unknown-linux-gnu   # Linux x64
rustup target add aarch64-unknown-linux-gnu  # Linux ARM64

Write-Host ""
Write-Host "✅ 所有构建目标安装完成!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 已安装的目标:" -ForegroundColor Cyan
rustup target list --installed | Select-String -Pattern "(apple|windows|linux)"
Write-Host ""
Write-Host "🎯 现在您可以使用以下命令构建不同平台:" -ForegroundColor Yellow
Write-Host "  npm run tauri:build:mac-arm64     # Mac M系列" -ForegroundColor White
Write-Host "  npm run tauri:build:mac-intel     # Mac Intel" -ForegroundColor White
Write-Host "  npm run tauri:build:windows       # Windows x64" -ForegroundColor White
Write-Host "  npm run tauri:build:linux         # Linux x64" -ForegroundColor White
Write-Host "  npm run tauri:build:all-platforms # 所有平台" -ForegroundColor White
Write-Host ""
Write-Host "📖 更多信息请查看 BUILD_GUIDE.md" -ForegroundColor Cyan