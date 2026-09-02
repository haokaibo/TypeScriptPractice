// 第三节练习：export 函数 + 对象解构

// 1. 用 interface 定义参数形状（比内联类型更优雅）
export interface User {
  name: string
  id: number
}

// 2. 导出函数 + 参数解构
export function handleUser({ name, id }: User): void {
  console.log(`User: ${name}, ID: ${id}`)
}
