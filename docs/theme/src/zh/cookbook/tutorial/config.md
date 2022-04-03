---
title: 配置项目
icon: config
category:
  - 快速上手
  - 基础知识
  - 教程
tag:
  - 配置项目
---

本教程指引你如何配置 VuePress 项目。

<!-- more -->

## 配置 VuePress

如果没有配置文件，一个 VuePress 项目只能按照预设实现有限的功能，所以为了更好的自定义你的网站，VuePress 提供了配置文件。

VuePress 使用项目文件夹下的 `.vuepress` 文件夹存放配置，所有 VuePress 相关的文件都将会被放在这里。

对于 VuePress 站点来说，`.vuepress/config.ts` (或 `.vuepress/config.js`) 是必要的配置文件。

::: tip 使用 TS 配置文件

我们建议你使用 TypeScript 配置文件，以得到更好的类型提示、自动补全与错误检查。

如果你不熟悉 TypeScript，使用 JavaScript 配置文件也是可以的，但你最好使用诸如 VSCode 这种全面支持 TS/JS 语法的编辑器，以避免丢失下方提及的类型检查、自动补全与选项提示等功能。

:::

## 配置文件

你需要在配置文件`.vuepress/config.ts` (或 `.vuepress/config.js`) 中，设置一个配置对象并将其导出。

为了能够得到正确的提示，我们建议从 `vuepress-theme-hope` 导入 `defineHopeConfig` 并包裹配置对象:

:::: code-group

::: code-group-item TS

```ts {2,4,6}
// .vuepress/config.ts
import { defineHopeConfig } from "vuepress-theme-hope";

export default defineHopeConfig({
  // 此处放置配置
});
```

:::

::: code-group-item JS

```js {2,4,6}
// .vuepress/config.js
const { defineHopeConfig } = require("vuepress-theme-hope");

module.exports = defineHopeConfig({
  // 此处放置配置
});
```

:::

::::

## 配置作用域

你可能已经注意到了，在 VuePress 配置中有一项 `themeConfig` 配置项。

在 `themeConfig` 外部的配置项属于 **站点配置** ，而在 `themeConfig` 内部的配置项则属于 **主题配置**。

### 站点配置

站点配置中的配置项被 VuePress 直接读取，和主题无关且在所有主题均可生效。

我们知道，每一个站点都应该有它的 `lang`, `title` 和 `description` 等属性，因此 VuePress 内置支持了这些属性的配置。

::: info 站点配置

你可以前往前往 [VuePress2 → 参考 → 配置](https://v2.vuepress.vuejs.org/zh/reference/config.html) 查看所有 VuePress 配置。

:::

### 主题配置

主题配置将会被 VuePress 主题来处理。你可以在 [配置 → 主题配置](../../config/README.md) 中找到全部的主题配置。

::: tip 提示与检查

如果你在使用支持 TS/JS 语言特性的编辑器 (如 VSCode)，你可以很方便的得到选项提示与检查。

- 你可以将鼠标悬停在某个选项以获得提示:

  ![选项提示](./assets/vscode-hint-light.png#light)
  ![选项提示](./assets/vscode-hint-dark.png#dark)

- 如果你输入了错误的选项名称或非法的值，你会得到错误提示:

  ![错误提示](./assets/vscode-error-light.png#light)
  ![错误提示](./assets/vscode-error-dark.png#dark)

- 你可以在输入时得到自动补全:

  ![自动补全](./assets/vscode-autocomplete-light.png#light)
  ![自动补全](./assets/vscode-autocomplete-dark.png#dark)

:::

### 更多

::: info 插件配置

VuePress Theme Hope 主题捆绑了一些插件，你可以通过 `themeConfig.plugins.插件名称` 来传递插件选项，详见 [配置 → 主题插件配置](../../config/plugins/README.md)。

如果你想要额外使用插件，请自行调用插件并传递插件选项，详见 [VuePress → 插件](../vuepress/plugin.md)。

:::

::: info 样式配置

VuePress Theme Hope 主题按照约定俗称，使用 `.vuepress/styles` 文件夹存放样式配置。

你可以在此文件夹中:

- 创建 `index.scss` 来注入额外的 CSS 样式
- 创建 `config.scss` 来进行样式配置
- 创建 `palette.scss` 来配置颜色与布局

更多详情，详见 [配置 → 样式配置](../../config/style.md)。

:::

::: info 页面配置

VuePress 支持在页面范围内通过 Markdown 文件中的 YAML Frontmatter 进行特定页面的配置，详见之前章节中的 [项目内容 → Frontmatter](./content.md#frontmatter)。

:::