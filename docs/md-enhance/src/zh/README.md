---
home: true
title: 主页
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-md-enhance
tagline: 为 VuePress 提供更多 Markdown 增强功能
actions:
  - text: 快速上手 💡
    link: /zh/guide/
    type: primary

  - text: 配置 🛠
    link: /zh/config.html

features:
  - title: 上下角标支持
    icon: superscript
    details: 你的 Markdown 现在将支持上下角标
    link: /zh/guide/sup-sub.html

  - title: 脚注
    icon: footnote
    details: 你的 Markdown 现在将支持脚注
    link: /zh/guide/footnote.html

  - title: 自定义对齐支持
    icon: align
    details: 让你在 Markdown 中对段落进行对齐
    link: /zh/guide/align.html

  - title: 标记支持
    icon: write
    details: 让你在 Markdown 中对词句进行标记
    link: /zh/guide/mark.html

  - title: 任务列表
    icon: check
    details: 在 Markdown 中使用任务列表
    link: /zh/guide/tasklist.html

  - title: 流程图支持
    icon: tree
    details: 可以在 Markdown 中直接写出流程图
    link: /zh/guide/flowchart.html

  - title: Mermaid 支持
    icon: diagram
    details: 可以在 Markdown 中添加 Mermaid 图例
    link: /zh/guide/mermaid.html

  - title: Tex 支持
    icon: tex
    details: Markdown 现在也可以支持 Tex 语法以显示公式
    link: /zh/guide/tex.html

  - title: 代码案例支持
    icon: discover
    details: 你可以很方便的插入代码案例
    link: /zh/guide/demo/

  - title: 幻灯片支持
    icon: slides
    details: 你可以直接在 Markdown 中插入幻灯片
    link: /zh/guide/presentation/

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

## 使用插件

### 安装

:::: code-group

::: code-group-item yarn

```bash
yarn add -D vuepress-plugin-md-enhance@next
```

:::

::: code-group-item npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```

:::

::::

### 使用

:::: code-group

::: code-group-item ts

```ts
// .vuepress/config.ts
import { mdEhance } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEhance({
      // 你的选项
    }),
  ],
};
```

:::

::: code-group-item js

```js
// .vuepress/config.js
const { mdEhance } = require("vuepress-plugin-md-enhance");

module.exports = {
  plugins: [
    mdEhance({
      // 你的选项
    }),
  ],
};
```

:::

::::