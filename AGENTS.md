# 项目代理说明

## 项目概览

这是 Hairan(Sam) Zhang 的静态 Academic CV 网页项目，部署目标是 GitHub Pages：

```text
https://ezio33101.github.io/CV/
```

项目为纯静态站点，无构建步骤、无包管理器、无后端服务。

## 工作规则

每次开始修改本项目时，先读取本文件 `AGENTS.md`，了解项目结构、部署方式和维护约定。

每次对项目作出实质修改后，都需要同步更新本文件，记录最新的项目结构、内容定位或维护注意事项。

## 当前内容定位

网页定位为 academic / professional CV，重点展示：

- 合作办学
- 国际教育
- 东南亚市场
- 国内院校合作办学
- 项目申报
- 项目运营
- 项目管理
- 项目开发
- 院校关系维护
- 跨文化沟通协调

当前个人简介强调：专注于合作办学与国际教育项目发展，主要面向东南亚市场，推动海外教育资源与国内院校之间的合作办学项目落地。

## 页面结构

入口文件：`index.html`

页面主要区块：

1. 顶部导航
2. Hero 学术主页首屏
3. Academic Profile 个人简介
4. Education 教育经历
5. Experience 工作经历
6. Selected Works 代表作品
7. Competencies 核心能力
8. Contact 联系方式
9. Footer 页脚

## 文件结构

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── styles.css
├── styles.js
├── assets/
│   └── hairan-zhang.jpeg
├── .gitignore
├── SOUL.md          # 本地助手记忆文件，已被 .gitignore 忽略
├── USER.md          # 本地用户资料文件，已被 .gitignore 忽略
├── memory/          # 本地助手记忆目录，已被 .gitignore 忽略
└── .claude/         # 本地 Claude 配置目录，已被 .gitignore 忽略
```

## 关键文件说明

- `index.html`：网页主体内容。修改简历文本、链接、区块结构时主要编辑这里。
- `styles.css`：完整视觉样式。当前遵循 `DESIGN.md` 中的 StudioBlank Design System：黑白灰极简、充足留白、严格网格、0 圆角、无阴影、无渐变、无装饰图形。
- `styles.js`：轻量脚本，用于自动更新页脚年份、移动端导航开合。
- `assets/hairan-zhang.jpeg`：当前头像图片。
- `README.md`：面向访客/维护者的极简项目说明和使用方式。
- `AGENTS.md`：面向后续 AI 代理的项目维护说明。

## 已清理的冗余文件

以下旧文件已删除，不应再恢复，除非用户明确要求：

- `latest.html`：旧参考页面，内容已整合到当前 `index.html`。
- `张三-个人主页.html`：旧模板页面。
- `assets/avatar.svg`：旧占位头像，已替换为 `assets/hairan-zhang.jpeg`。
- `.DS_Store`：系统缓存文件。

## 部署说明

GitHub 仓库地址：

```text
https://github.com/ezio33101/CV.git
```

推荐 GitHub Pages 设置：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

## 维护注意事项

- 不要提交 `.claude/`、`memory/`、`SOUL.md`、`USER.md`、`.DS_Store`。
- 如替换头像，优先放入 `assets/`，并同步修改 `index.html` 中的图片路径。
- 如修改页面定位、核心内容、文件结构或部署方式，必须同步更新本文件。
- 当前没有构建流程；本地预览可直接打开 `index.html`，或运行静态服务器。

## 最近更新

- 教育经历已补充本科阶段：苏州工学院，英语专业。
- 为 `README.md` 新增了 Prompt 模板区块，方便后续直接复用常见指令。
- 当前头像已替换为 `assets/hairan-zhang.jpeg`。
- 冗余文件 `latest.html`、`张三-个人主页.html`、`assets/avatar.svg`、`.DS_Store` 已清理。
