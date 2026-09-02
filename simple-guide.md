# 简易教程

#typescript

这份简易 TypeScript 教程专注于开发 **DeepSeek Harness** 插件所需的实用语法，剔除了复杂的“类型体操”，助你快速上手。

---

## 一、 基础类型与接口（Interface）

用于定义变量和数据结构的形状，开发插件时用来约束配置参数和工具输入。

```TypeScript
// 1. 基础类型声明
const pluginName: string = 'my-custom-tool'
const maxRetries: number = 3
const isEnabled: boolean = true

// 2. 接口 (Interface)：定义对象结构
interface ToolConfig {
  apiKey: string
  timeout?: number // 带有 ? 表示可选属性
}

const config: ToolConfig = {
  apiKey: 'sk-123456', // timeout 可填可不填
}
```

---

## 二、 函数与异步编程（Async / Await）

插件中的大部分工具调用和网络请求都是异步的，必须掌握 `Promise` 与 `async/await`。

```TypeScript
// 定义接口约束函数参数
interface FetchParams {
  url: string
}

// 异步函数：指定返回值为 Promise<string>
async function fetchData(params: FetchParams): Promise<string> {
  // 模拟异步 API 请求
  const response = await fetch(params.url)
  const data = await response.text()
  return data
}
```

---

## 三、 模块化与解构（Import / Export）**

用于导入 Harness 框架提供的类型或导出你编写的插件。

TypeScript

```TypeScript
// 导出变量与函数
export const name = 'my-helper'

export function helper() {
  console.log('Helping...')
}

// 对象解构 (Destructuring) 提取参数
export function handleUser({ name, id }: { name: string; id: number }) {
  console.log(`User: ${name}, ID: ${id}`)
}
```

---

## 四、 基础泛型（Generic）**

泛型即“类型的变量”，用于增强代码复用性。在 Harness 中常用于声明容器或框架提供的 `Context<T>`。

```TypeScript
// <T> 相当于一个占位符，由传入的类型决定
interface ApiResponse<T> {
  code: number
  data: T
}

// 使用时指定具体的类型
const userResponse: ApiResponse<{ username: string }> = {
  code: 200,
  data: { username: 'Alice' }
}
```

---

## 五、 实战：DeepSeek Harness 插件整合实例**

结合上述知识点，编写一个完整的 Harness 工具插件：

```TypeScript
import type { Context } from '@deepseek-ai/cordis'

// 1. 插件基本元信息
export const name = 'weather-tool'
export const inject = ['tools'] // 声明依赖的服务

// 2. 参数接口定义
interface WeatherArgs {
  city: string
}

// 3. 核心导出函数
export function apply(ctx: Context) {
  // 注册一个异步 Tool
  ctx.tools.register({
    name: 'get_weather',
    description: '获取指定城市的当前天气',
    // 异步执行逻辑并应用 TS 类型约束
    async execute(args: WeatherArgs): Promise<string> {
      const { city } = args
      // 模拟请求
      return `城市 [${city}] 的当前天气是：晴朗，25℃`
    }
  })

  // 利用 ctx.effect 管理副作用清理
  ctx.effect(() => {
    console.log('[weather-tool] 插件成功加载！')
    return () => console.log('[weather-tool] 插件已卸载')
  })
}
```

按照这个模板，掌握这些 TS 语法即可直接开始写代码，遇到不懂的具体 API 再边查边学。
