// greet 函数的单元测试
import { describe, it, expect } from 'vitest'
import { greet } from './greet.js'

describe('greet', () => {
  it('英文问候（默认）', async () => {
    const result = await greet<string>({ name: 'Alice' })
    expect(result).toBe('Hello, Alice!')
  })

  it('中文问候（显式传 lang=zh）', async () => {
    const result = await greet<string>({ name: 'Bob', lang: 'zh' })
    expect(result).toBe('你好，Bob！')
  })

  it('泛型约束检查：传非字符串字面量类型应报错（编译期）', () => {
    // 这一行不会执行——只是演示 TS 泛型约束生效
    // @ts-expect-error 数字不是 string 的子类型
    greet<number>({ name: 'X' })
  })
})
