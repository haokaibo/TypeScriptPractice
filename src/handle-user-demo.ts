// 演示如何 import + 调用 handleUser

import { handleUser, type User } from './handle-user.js'

export {}

// 1. 正常调用
handleUser({ name: 'Alice', id: 42 })

// 2. 类型错误演示（取消注释可看到 TS 报错）：

// handleUser({ name: 'Bob' })
// ^^^^^^^^^^ error TS2741: Property 'id' is missing

// handleUser({ name: 'Bob', id: 'not-a-number' })
//                                    ^^^^^^^^^^^ error TS2322: Type 'string' is not assignable to 'number'

// 3. 也可以先把对象存为 User 类型再传入
const u: User = { name: 'Charlie', id: 7 }
handleUser(u)
