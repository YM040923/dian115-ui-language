# Demo 使用地图

Demo 不是参考项目的副本，也不是未来产品的页面模板。它是一个**可运行的视觉校准样本**：帮助人和 Codex 把文档里的抽象原则对应到真实排版、真实状态和真实交互。

## 先看哪里

| 位置 | 观察重点 | 对应文档 |
|---|---|---|
| 左侧导航和顶部栏 | 全局壳层、意图分组、当前位置、搜索和主题 | `DESIGN-LANGUAGE.md`、`COMPONENTS.md` |
| 总览首屏 | 信息优先级、指标密度、趋势与健康状态的关系 | `COMPOSITION.md`、`TOKENS.md` |
| 任务/动态/正在播放区域 | 不同任务使用不同组件，而不是所有内容都做成卡片 | `COMPONENTS.md` |
| 系统资源、统计、排行和下载区域 | 当前工作之后如何继续提供证据和结果 | `reference/REFERENCE-TO-DEMO-MATRIX.zh-CN.md` |
| 探索发现页 | 来源/模式、筛选、媒体卡片和快速动作的关系 | `COMPONENTS.md`、`RESPONSIVE.md` |
| 系统设置页 | 分组表单、测试/保存、风险提示和恢复路径 | `STATES.md`、`ACCESSIBILITY.md` |
| 移动端 400px 左右宽度 | 抽屉、单列、触控目标、浮层避让和阅读顺序 | `RESPONSIVE.md` |

## Demo 中的设计角色标记

Demo 的关键区域带有 `data-design-role` 属性。它们不是业务 API，也不是组件命名规范，只是帮助阅读源码和自动化工具定位设计证据。

| 标记 | 含义 |
|---|---|
| `intent-navigation` | 按用户意图分组的导航 |
| `workspace-frame` | 独立滚动的内容工作区 |
| `overview-composition` | 一个完整的总览编排示例 |
| `page-header` | 页面位置、用途、新鲜度和主动作 |
| `metric-group` | 首屏结论指标 |
| `health-evidence-grid` | 趋势/证据与依赖健康状态 |
| `live-work-grid` | 任务队列、动态和当前工作 |
| `supporting-evidence-grid` | 资源和统计等支撑证据 |
| `output-grid` | 排行、下载等结果模块 |
| `media-output-grid` | 图像识别型结果网格 |
| `attention-assistant` | 非阻塞的跨页面关注入口 |

## Demo 不能证明什么

- 不能证明真实后端接口、数据持久化或权限模型。
- 不能证明参考项目的私有实现方式。
- 不能证明所有按钮在真实产品中都应存在。
- 不能证明 Demo 中的数字、品牌和文案适合迁移到新产品。

## 阅读源码时的正确问题

不要问：

> “我要怎么把这个页面复制出来？”

要问：

> “这个区域在帮助用户做什么决定？它为什么放在这里？如果换一个产品，什么内容应该替换它？它在 loading、empty、offline、error 时怎么变化？”
