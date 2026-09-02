// 跑通工具链的小 demo：综合 simple-guide.md 的几个知识点

// 1. 接口约束参数
interface GreetArgs {
  name: string
  lang?: 'en' | 'zh'
}

export {} // 标记为 ESM，使顶层 await 合法

// 2. 异步函数 + 泛型
async function greet<T extends string>(args: GreetArgs): Promise<T> {
  const lang = args.lang ?? 'en'
  const msg = lang === 'zh' ? `你好，${args.name}！` : `Hello, ${args.name}!`
  return msg as T
}

// 3. 主入口（顶层 await 在 ESM 模式下可用）
const result = await greet<`你好，${string}！`>({
  name: 'TypeScript',
  lang: 'en',
})
console.log(result)
