# 项目代理说明

## 项目概览

这是 Hairan(Sam) Zhang 的静态个人主页项目，部署目标是 GitHub Pages：

```text
https://ezio33101.github.io/CV/
```

项目为纯静态站点，无构建步骤、无包管理器、无后端服务。

## 工作规则

每次开始修改本项目时，先读取本文件 `AGENTS.md`，了解项目结构、部署方式和维护约定。

每次对项目作出实质修改后，都需要同步更新本文件，记录最新的项目结构、内容定位或维护注意事项。

## 当前内容定位

网页定位为成熟、克制的 personal / professional homepage，不是传统简历清单；重点展示：

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

当前个人简介强调：关注合作办学与国际教育项目发展，主要面向东南亚市场，推动海外教育资源与国内院校之间建立清晰、稳定、可持续的合作关系。

## 页面结构

入口文件：`index.html`
项目类型页：`project-student-support.html`、`project-teacher-operations.html`、`project-application-governance.html`

页面主要区块：

1. 顶部导航
2. Hero 个人主页首屏
3. Professional Profile 个人简介
4. Education 教育经历
5. Experience 工作主线
6. Project Experience 项目经历分类入口
7. Competencies 核心能力
8. Contact 联系方式
9. Footer 页脚

项目类型页分别展示 7 个项目经历中的对应类别：

1. Student Development & Recruitment 学生发展与招生支持
2. Foreign Teacher Operations 外教运营与项目落地
3. Joint Program Application & Governance 合作办学申报与院校治理

## 文件结构

```text
.
├── AGENTS.md
├── DESIGN.md
├── README.md
├── index.html
├── project-student-support.html
├── project-teacher-operations.html
├── project-application-governance.html
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

- `index.html`：网页主体内容。修改个人主页文本、链接、首页区块结构时主要编辑这里。
- `project-student-support.html`：学生发展与招生支持类型页，只展示学生流动与招生宣传相关项目。
- `project-teacher-operations.html`：外教运营与项目落地类型页，只展示短期外教运营相关项目。
- `project-application-governance.html`：合作办学申报与院校治理类型页，只展示申报材料、会议治理与外方接待相关项目。
- `styles.css`：完整视觉样式。当前遵循 `DESIGN.md` 中的 StudioBlank Design System：黑白灰极简、充足留白、严格网格、0 圆角、无阴影、无渐变、无装饰图形。
- `styles.js`：轻量脚本，用于自动更新页脚年份、移动端导航开合、首页与横向扩展板块切换、联系方式定位与导航高亮。
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
- 页面内容应避免过度学生化或简历流水账表达；低质量奖项、计算机一级、C1 驾照等与当前主页定位无关的信息不应展示。
- 首页项目区应保持分类导览定位，具体项目细节优先维护在三个独立项目类型页，避免首页再次变成过长的简历清单，也避免单个详情页混合展示多个定位不同的类型。
- 首页当前为混合式单页界面：`index.html` 的 `main.homepage-shell` 包含纵向首页 panel 与两个横向扩展 panel。个人简介、教育经历、核心能力、联系方式集中在首页纵向信息流中；右上角仅保留“工作主线”“项目经历”“联系方式”，其中联系方式按钮回到首页底部联系方式区。

## 最近更新

- 页面定位已从 Academic CV 调整为 Personal Homepage，文案更偏成熟的个人主页表达。
- 已删除三等奖学金、计算机一级考试、C1 驾照等弱相关或低质量资质展示，并弱化校园经历色彩。
- 语言与专业证书已补充英语专业八级（TEM-8 / 专八），展示于 Education 区块的语言能力条目中。
- 根据旧版 PDF 简历保留了与当前定位相关的本科核心课程、语言证书、早期英语教学实践与真实联系方式；低质量校园奖项和弱相关证照不作为页面内容展示。
- 教育经历已补充本科阶段：苏州工学院，英语专业。
- 为 `README.md` 新增了 Prompt 模板区块，方便后续直接复用常见指令。
- 当前头像已替换为 `assets/hairan-zhang.jpeg`。
- 冗余文件 `latest.html`、`张三-个人主页.html`、`assets/avatar.svg`、`.DS_Store` 已清理。
- 主页内容已重组为合作办学与国际教育项目主线，Experience 区块改为工作主线，原 Selected Works 区块改为 7 个项目经历卡片。
- 新增的重点项目包括学生赴马来西亚学习支持、揭牌仪式与联合管理委员会、招生宣传、短期外教运营、申报材料支持与申报全流程参与等。
- 项目详情已由单一 `projects.html` 拆分为三个独立类型页，并移除项目卡片中的可见编号，避免不同类型页面中出现不连贯编号。
- 首页 Project Experience 分类卡片已改为普通卡片加“查看详情”按钮，避免用户误以为分类卡片没有更多内容可点击。
- 三个项目类型页 Hero 区域仅保留“返回项目分类”按钮，不再放置跨类型详情页跳转按钮，保持单页定位聚焦。
- 主页布局已调整为“纵向信息首页 + 横向扩展页”：首页承载个人简介、教育经历、核心能力与联系方式，工作主线和项目经历作为额外横向页面；右上角按钮精简为工作主线、项目经历、联系方式。
