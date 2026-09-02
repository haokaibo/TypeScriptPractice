// 主入口：演示如何调用 greet
import { greet } from './greet.js'

export {} // 标记为 ESM，使顶层 await 合法

const result = await greet<string>({ name: 'TypeScript', lang: 'zh' })
console.log(result)
