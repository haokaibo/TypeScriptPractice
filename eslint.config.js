// ESLint 9+ 的扁平配置（flat config）
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // 基础推荐规则
  ...tseslint.configs.recommended,

  // 项目级配置
  {
    // 作用于哪些文件
    files: ['**/*.ts'],

    // 规则微调
    rules: {
      // 学习阶段允许 console.log 调试
      'no-console': 'off',

      // 未使用的变量以 "下划线开头" 时忽略（约定俗成）
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // 忽略某些目录
  {
    ignores: ['node_modules', 'dist'],
  },
)
