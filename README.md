# DrawClient - Cross-platform Database Design 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-blue.svg)](https://tauri.app/) [![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Rust](https://img.shields.io/badge/Rust-1.70+-orange.svg)](https://www.rust-lang.org/) 
A modern cross-platform desktop database design application, built based on Tauri and React. Combining the high-performance backend of Rust and the modern frontend of React, it provides users with a smooth database design experience. 
✨ Features 
- 🎨 **Intuitive drawing interface** - Simple and user-friendly interface
- 🚀 **High performance** - Rust backend ensures smooth application operation
- 🌍 **Cross-platform** - Supports Windows, macOS and Linux
- 📦 **Lightweight** - Small size, low memory consumption
- 🔒 **Secure** - Tauri provides a strict security model
- 🎯 **Modern** - Uses the latest technology stack 
?? Get Started Quickly 
### Environmental Requirements 
- [Node.js](https://nodejs.org/) (Recommended: 18+)
- [Rust](https://www.rust-lang.org/) (Installed via [rustup](https://rustup.rs/))
- System dependencies (Depending on the target platform) 
### Installation 
1. Clone Repository
#### 1.1 Gitee ```bash
git clone https://gitee.com/xuanqings/drawclient.git
cd DrawClient
```
1.2 Github ```bash
git clone https://github.com/MarkBurt/Drawclient.git
cd DrawClient
```

2. Install dependencies ```bash
npm install
```

3. Start the development server ```bash
npm run tauri dev
```

### Construction 
Quickly Build (Current Platform) ```bash
# Build Production Version npm run tauri build
```

Cross-platform building 
We support the development of applications for multiple platforms: 
```bash
# 1. First, install all build targets
# For macOS/Linux users ./scripts/setup-targets.sh

# Windows Users .\scripts\setup-targets.ps1

# 2. Build specific platform
npm run tauri:build:mac-arm64     # Mac M series chips
npm run tauri:build:mac-intel     # Mac Intel chips npm run tauri:build:windows       # Windows x64
npm run tauri:build:linux         # Linux x64

# 3. Build all major platforms with one click npm run tauri:build:all-platforms
```

**Supported platforms:**
- 🍎 **macOS**: ARM64 (M series) / Intel x64 / Universal - 🪟 **Windows**: x64 / ARM64
- 🐧 **Linux**: x64 / ARM64

?? For detailed construction guidelines, please refer to [BUILD_GUIDE.md](BUILD_GUIDE.md) 
## Project Directory Structure 
```
DrawClient/
├── .gitignore                    # Git ignore file configuration
├── .vscode/                      # VS Code editor configuration
│   └── extensions.json           # Recommended VS Code extensions
├── README.md                     # Project description document
├── index.html                    # Main HTML entry file
├── package.json                  # Node.js project configuration and dependencies
├── package-lock.json             # Locked dependency versions
├── vite.config.js                # Vite build tool configuration
├── public/                       # Static resource directory
│   ├── tauri.svg                 # Tauri icon
│   └── vite.svg                  # Vite icon
├── src/                          # React front-end source code
│   ├── App.css                   # Main application style
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # React application entry
│   └── assets/                   # Front-end resource files
│       └── react.svg             # React icon
└── src-tauri/                    # Tauri backend source code
    ├── .gitignore                # Tauri-specific Git ignore configuration
    ├── Cargo.toml                # Rust project configuration file
    ├── Cargo.lock                # Rust dependency lock file
    ├── build.rs                  # Rust build script
    ├── tauri.conf.json           # Tauri application configuration
    ├── capabilities/             # Tauri permission configuration
    │   └── default.json          # Default permission settings    ├── icons/                    # Application icon resources
    │   ├── icon.png              # Main icon
    │   ├── icon.ico              # Windows icon
    │   ├── icon.icns             # macOS icon
    │   └── [icons of various sizes...]  # Various-sized application icons
    ├── src/                      # Rust backend source code
    │   ├── main.rs               # Rust application entry point
    │   └── lib.rs                # Rust library file
    ├── target/                   # Rust compilation output directory
    └── gen/                      # Automatically generated files
        └── schemas/              # API schema definitions ```

## Explanation of Each Part's Function 
### Frontend Part (src/)
- **React + Vite**: Utilizing modern front-end technology stack to build the user interface
- **App.jsx**: The main application component, containing the core logic of the drawing interface
- **main.jsx**: The entry point of the React application, responsible for rendering the root component
- **App.css**: The style definitions for the application 
### Backend Part (src-tauri/)
- **Rust**: Develop high-performance desktop application backend using the Rust language
- **main.rs**: The main entry point of the Tauri application, initializing the window and system integration
- **lib.rs**: Core business logic library, which may include system calls related to graphics
- **tauri.conf.json**: Application configuration, including window settings, permissions, build options, etc. 
### Configuration Files
- **package.json**: Defines front-end dependencies, script commands, and project metadata
- **Cargo.toml**: Defines Rust dependencies and project configuration
- **vite.config.js**: Configuration file for Vite build tool, optimizing development and build processes 
### Resource Files
- **icons/**: Contains icon files for the application on different platforms
- **public/**: Static resources that will be copied to the output directory during build
- **assets/**: Resource files used by the front-end components 
## Development Environment Setup 
Recommended IDE Configuration - [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

### Environmental Requirements
- Node.js (version 18 or higher is recommended)
- Rust (installed via rustup)
- System dependencies (varies depending on the target platform) 
### Development Command ```bash
# Install front-end dependencies npm install

# Start the development server npm run tauri dev

# Build the Application npm run tauri build
```

## 🛠️ Technology Stack 
### Frontend
- **React 18** - A modern user interface library
- **Vite** - A fast build tool
- **CSS3** - Modern styling design 
### Backend
- **Rust** - A high-performance language for system programming
- **Tauri 2.0** - A lightweight framework for desktop applications 
### Development Tools
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code Quality Check
- **Prettier** - Code Formatting 
?? Contribution 
We welcome all forms of contributions! Please refer to [Contributing Guide](CONTRIBUTING.md) to learn how to participate in the project development. 
### Development Process 
1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 
## 📝 LICENSE 
This project is licensed under the MIT License - for details, please refer to the [LICENSE] file. 
## 🙏 Acknowledgements 
- [Tauri](https://tauri.app/) - Offers an excellent framework for desktop applications
- [React](https://reactjs.org/) - A powerful front-end library
- [Rust](https://www.rust-lang.org/) - A secure and efficient system programming language
- [drawdb](https://github.com/drawdb-io/drawdb) -This project was used for the reconfiguration.
## 📞 Contact 
If you have any questions or suggestions, please contact us through the following methods: 
- Submit [Issue] (https://github.com/MarkBurt/Drawclient/issues)
- Send an email to hu_works.com 
---

⭐ If this project is helpful to you, please give us a Star!
