// 被测代码：问候函数（从原 index.ts 抽出）
export interface GreetArgs {
  name: string
  lang?: 'en' | 'zh'
}

export async function greet<T extends string>(args: GreetArgs): Promise<T> {
  const lang = args.lang ?? 'en'
  const msg = lang === 'zh' ? `你好，${args.name}！` : `Hello, ${args.name}!`
  return msg as T
}
