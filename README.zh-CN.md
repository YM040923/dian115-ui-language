# Dian115 UI Language

[English](README.md) | 简体中文

这是一个给 Codex 和开发者使用的 **UI 设计语言参考项目**。它来自对 DIAN115 公开演示页的黑盒观察，记录视觉风格、信息层级、页面排版、交互逻辑、状态表达和响应式策略。

**在线体验：** [打开 Harbor Console Demo](https://ym040923.github.io/dian115-ui-language/)

它不是 DIAN115 源码，也不包含私有数据、生产配置或业务逻辑克隆。它的目标是：以后你把这个项目交给 Codex，Codex 能理解你想要的那类界面；同时别人也能通过文档学习这种 UI。

## 一句话理解

> 这是一个浅色优先、面向媒体自动化运维的控制台语言：低饱和冷中性背景、安静的蓝色交互强调、高信息密度但不嘈杂，用清晰的状态和分组让长任务变得可理解。

## 文档和 Demo 各自负责什么

这个项目不是“文档讲一遍、Demo 再做一遍”，而是一条完整的设计证据链：

| 层 | 文件 | 作用 |
|---|---|---|
| 观察事实 | `reference/REFERENCE-AUDIT.md` | 记录参考页面实际看到了什么；不把推测当成源码事实 |
| 抽象原则 | `DESIGN-LANGUAGE.md`、`TOKENS.md`、`COMPONENTS.md`、`STATES.md`、`COMPOSITION.md`、`RESPONSIVE.md` | 说明哪些视觉、排版和交互规律可以迁移 |
| 翻译层 | `docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md` | 把“观察”翻译成“原则、证据、迁移规则和禁止复制项” |
| 可运行证据 | `demo/` | 用 Harbor Console 这个原创壳展示原则在真实页面中的密度、层级、状态和响应式表现 |
| 代码索引 | `docs/DEMO-MAP.zh-CN.md` | 告诉人和 Codex 应该在 Demo 哪个区域观察什么 |
| 验收标准 | `docs/UI-REVIEW-CHECKLIST.zh-CN.md` | 判断新产品是否真的使用了这套语言，而不是只换颜色和圆角 |
| 执行协议 | `CODEX.md`、`docs/USING-WITH-CODEX.md`、`design-profile.yaml` | 让 Codex 能按同一流程读取、迁移和组合多个 UI 语言项目 |

因此，**Demo 是视觉与交互证据，不是页面需求；文档是规则，不是装饰性说明**。只看其中一边，都会误读这个项目。

## 适合什么产品

- 媒体库、下载器、同步器、整理器、网盘和 Emby 运维后台。
- 任务队列、日志、数据运维、插件中心、系统设置等工具型产品。
- 需要同时承载指标、实时状态、列表、封面和配置表单的软件。

## 不要照搬什么

- 不要照搬 DIAN115 的路由、业务名、数据、品牌、图标和插画。
- 不要把整个页面做成同样的仪表盘；只借用被明确记录的设计原则。
- 不要用假数据制造“看起来很专业”的精确数字；演示数据要明确标注。

## 推荐阅读顺序

1. [AGENTS.md](AGENTS.md)
2. [CODEX.md](CODEX.md)
3. [reference/REFERENCE-AUDIT.md](reference/REFERENCE-AUDIT.md) —— 先看观察事实
4. [docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md](docs/REFERENCE-TO-DEMO-MATRIX.zh-CN.md) —— 再看观察如何被抽象
5. [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)
6. [TOKENS.md](TOKENS.md)
7. [COMPONENTS.md](COMPONENTS.md)
8. [STATES.md](STATES.md)
9. [COMPOSITION.md](COMPOSITION.md)
10. [RESPONSIVE.md](RESPONSIVE.md)
11. [docs/DEMO-MAP.zh-CN.md](docs/DEMO-MAP.zh-CN.md) —— 再打开 Demo 校准视觉
12. [docs/UI-REVIEW-CHECKLIST.zh-CN.md](docs/UI-REVIEW-CHECKLIST.zh-CN.md) —— 最后用它验收
13. [docs/DESIGN-TRANSFER-BRIEF.zh-CN.md](docs/DESIGN-TRANSFER-BRIEF.zh-CN.md) —— 迁移到具体产品前填写

给 Codex 时，优先使用 [docs/USING-WITH-CODEX.md](docs/USING-WITH-CODEX.md) 中的提示词，不要只说“参考这个 Demo 做得像一点”。

## 参考页面

https://madbrolab.github.io/dian115/demo/#/overview

本文档是对公开演示页面的黑盒分析，不复制源码。参考项目的版权、商标、品牌和原始素材归原作者所有。

## 许可

- 原创 Demo 代码和检查脚本：Apache-2.0，见 [LICENSE](LICENSE)。
- 文档与设计分析：CC BY 4.0，见 [LICENSE-DOCS](LICENSE-DOCS)。
- 参考项目名称、商标、原始素材及其他第三方材料不因本仓库而获得再许可。

## 架构决定

- **格式：** Markdown + YAML + 无依赖 HTML/CSS/JS 演示，方便 Codex 阅读，也方便别人直接运行。
- **核心产物：** 设计语言，不是组件库。文档负责讲清楚设计意图和状态语义，演示只用一个原创的小型产品壳证明这些规则。
- **原创边界：** 审计文档只记录公开页面的黑盒观察；可运行示例使用 Harbor Console 名称、内容和样式，不发布或镜像参考项目源码。
- **组合规则：** 一个目标产品只选一个主设计语言，其他参考项目只贡献被明确命名的维度。

## 明确不包含

- 不引入 React/Vue 构建系统或依赖树。
- 不包含后端、数据库、登录、真实第三方服务或生产数据。
- 不制作参考项目的像素级复刻。
- 不复制参考站点的截图资源。
- 不克隆全部参考路由；文档只说明如何判断目标产品真正需要哪些模块。

## 和其他 UI 语言项目一起使用

组合多个项目时，先写清楚职责，不要把它们的颜色、圆角、阴影和布局平均混合：

```text
主设计语言：Dian115 UI Language —— shell、运维密度、状态语义
次级维度：Reference B —— 媒体卡片
次级维度：Reference C —— 图表表达
保留原创：目标产品的品牌、信息架构、业务实体和页面职责
冲突时：产品任务 > 平台可用性 > 主语言 > 次级维度 > 装饰
```

每次迁移都应能回答：**借用了哪条原则、Demo 的哪项证据支持它、目标产品做了什么原创改写、哪些内容明确没有复制。**
