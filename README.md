# TypeScript Practice

A learning-by-doing playground for TypeScript syntax, aimed at preparing to write plugins for the **DeepSeek Harness** (built on `@deepseek-ai/cordis`).

Companion tutorial: see [`simple-guide.md`](./simple-guide.md).

---

## ✨ What's Inside

- **Pre-configured toolchain** — TypeScript, ESLint, Prettier, Vitest, tsx — install once, focus on writing code.
- **Strict mode by default** — catches type errors at compile time, builds good habits early.
- **ESM-native** — uses modern `"type": "module"` + ESM imports throughout.
- **Practical examples** — each section of `simple-guide.md` maps to runnable code under `src/`.

---

## 📋 Prerequisites

- **Node.js >= 20** (this repo is tested on Node 26)
- **npm >= 11** (ships with Node 20+)

Check your version:

```bash
node --version
npm --version
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the main demo
npm start
# → Output: 你好，TypeScript！

# 3. Run tests
npm test

# 4. Type-check only (no JS emitted)
npm run typecheck
```

---

## 🧰 Available Scripts

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm start`            | Run `src/index.ts` once via `tsx`               |
| `npm run dev`          | Watch mode — auto-restart on file changes       |
| `npm test`             | Run all unit tests (Vitest, single run)         |
| `npm run test:watch`   | Watch mode for tests                            |
| `npm run coverage`     | Run tests with coverage report                  |
| `npm run typecheck`    | `tsc --noEmit` — type-check without emitting JS |
| `npm run lint`         | ESLint check (no auto-fix)                      |
| `npm run lint:fix`     | ESLint with auto-fix                            |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Check formatting without modifying files        |

---

## 📁 Project Layout

```
.
├── src/
│   ├── index.ts              # Main entry — demo greet()
│   ├── greet.ts              # Example: async function + Promise<T>
│   ├── greet.test.ts         # Vitest unit tests for greet()
│   ├── exporter.ts           # Example: named & default exports
│   ├── importer.ts           # Example: importing default exports
│   ├── handle-user.ts        # Example: interface + object destructuring
│   └── handle-user-demo.ts   # Example: importing + calling
├── simple-guide.md           # The learning tutorial
├── tsconfig.json             # TypeScript config (strict, ESNext, DOM + Node)
├── eslint.config.js          # ESLint 9 flat config + typescript-eslint
├── .prettierrc               # Prettier rules (no semis, single quotes)
├── .vscode/launch.json       # Debug config (runs via tsx)
└── package.json              # All scripts + devDependencies
```

---

## 🛠️ Toolchain Choices

| Tool                           | Why                                                    |
| ------------------------------ | ------------------------------------------------------ |
| **`tsx`** instead of `ts-node` | Faster, zero-config, modern default                    |
| **`npm`** as package manager   | Zero install cost (ships with Node), widely understood |
| **Vitest** instead of Jest     | Native TS support, ESM-friendly, faster cold start     |
| **ESLint 9 flat config**       | The new standard; the old `.eslintrc` is deprecated    |
| **`type: "module"`**           | Forces ESM-first thinking from day one                 |

---

## 🐛 Debugging

Open the project in VS Code (or any IDE that respects `.vscode/launch.json`) and press **F5**:

- **Current TS File (via tsx)** — debug whichever `.ts` file is open
- **npm start (src/index.ts)** — debug the main entry

The debugger uses `tsx` under the hood so it understands `.ts` files and TypeScript's `.js` import aliases.

---

## 📚 Learning Path

Follow `simple-guide.md` in order. Each section maps to a file in `src/`:

| Guide Section | Topic                           | Example File                                   |
| ------------- | ------------------------------- | ---------------------------------------------- |
| 一            | Basic types & Interface         | `handle-user.ts`                               |
| 二            | Async / Await                   | `greet.ts`                                     |
| 三            | Import / Export + Destructuring | `exporter.ts`, `importer.ts`, `handle-user.ts` |
| 四            | Generics                        | (coming soon)                                  |
| 五            | Harness plugin in practice      | (coming soon — requires `@deepseek-ai/cordis`) |

---

## 🔧 Troubleshooting

### `Cannot find module './*.js'` when running `.ts` directly with `node`

**Cause:** Node can't run `.ts` files natively.
**Fix:** Always run via `tsx` — use `npm start` or the VS Code debug config.

### `npm run test` says "Missing script"

**Fix:** Already covered — `test` runs `vitest run`. Make sure you ran `npm install`.

### TypeScript errors after pulling new code

```bash
rm -rf node_modules package-lock.json
npm install
```

### Prettier complains about formatting in CI

```bash
npm run format         # locally
npm run format:check   # in CI to fail-fast
```

---

## 📄 License

[ISC](./LICENSE) © 2025 haokaibo
