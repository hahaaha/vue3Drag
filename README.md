# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## 贡献
如果想参与贡献，请先阅读开发贡献文档，非常感谢你所做的任何贡献。

### development Setup
你需要安装nodejs和npm，在clone项目后，运行下面命令：
```
$ npm install
```
### commit
commit的提交信息需要遵循[commit message规范](https://zhuanlan.zhihu.com/p/182553920?utm_source=wechat_session)

### 新增组件
我们自定义的全局组件是以组件库的形式提供的，组件库的写法和目录约定可以参考这个[组件](https://github.com/hahaaha/vue3Drag/tree/main/src/globalComponents/GlobalText)。

## 项目结构
- src: 项目源代码所在的位置。
    - components：项目组件
    - globalComponents: 画布中用到的全局组件库所在的目录
    


