<p align="center">
  <a href="https://primeintellect.ai">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/40c36e38-c5bd-4c5a-9cb3-f7b902cd155d">
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/6414bc9b-126b-41ca-9307-9e982430cde8">
      <img alt="Prime Intellect" src="https://github.com/user-attachments/assets/6414bc9b-126b-41ca-9307-9e982430cde8" width="312" style="max-width: 100%;">
    </picture>
  </a>
</p>

<h3 align="center">
Prime Agent：一个自我改进的 RLM 智能体
</h3>

<p align="center">
  <a href="https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/index.md">文档</a> &bull;
  <a href="https://github.com/PrimeIntellect-ai/verifiers">Verifiers</a> &bull;
  <a href="https://github.com/PrimeIntellect-ai/prime-rl">PRIME-RL</a> &bull;
  <a href="https://github.com/badlogic/pi-mono">pi-mono</a>
</p>

<p align="center">
  <a href="https://github.com/PrimeIntellect-ai/prime-agent/actions/workflows/ci.yml">
    <img src="https://github.com/PrimeIntellect-ai/prime-agent/actions/workflows/ci.yml/badge.svg" alt="CI" />
  </a>
  <a href="https://github.com/PrimeIntellect-ai/prime-agent/actions/workflows/build-binaries.yml">
    <img src="https://github.com/PrimeIntellect-ai/prime-agent/actions/workflows/build-binaries.yml/badge.svg" alt="构建二进制" />
  </a>
</p>

Prime Agent 是一个面向通用与长期任务的开源编码与研究智能体。它围绕两个核心抽象设计：

- **[递归语言模型（Recursive Language Model, RLM）](https://www.primeintellect.ai/blog/rlm)** 将上下文视为变量（*提示词即变量，prompt-as-a-variable*），并将诸如递归子智能体之类的工具视为函数调用（*程序化工具 /子智能体调用*），这一切都运行在持久的 REPL 环境中。
- **[持续框架（Continual Harness）](https://arxiv.org/abs/2605.09998)** 将补充提示词、记忆、技能描述和可复用的子智能体规范作为持久状态存储。Prime Agent 可以通过小规模、有证据支撑的更新来不断改进这些状态，默认情况下仅在当前会话内生效。

Prime Agent 将持久的 Python 控制环境与持久的框架状态相结合，使有用的工作上下文和可复用的操作模式能够超越单个聊天窗口而持续存在。

- **一切都是程序化的：** 持久化的 IPython 是内置的模型工具；文件操作、shell 命令、工具调用、子智能体和上下文管理全部通过代码完成。
- **内置子智能体：** `rlm(...)` 会生成真实的子智能体，用于并行或后台工作，并以程序化方式返回结果。
- **框架可以自我改进：** `/refine` 会审查当前的执行轨迹，并能对补充的框架状态应用小规模、有证据支撑的更新。它绝不会重写不可变的基础系统提示词，且记录的快照支持回滚。
- **技能是可执行的：** 技能是可导入的 Python 包，内置的技能创建器可以将重复性工作流转化为项目技能或个人技能。
- **会话在后台运行：** 基于守护进程的智能体在终端断开连接后仍会继续运行，之后可以重新挂接。
- **智能体之间可直接通信：** 正在运行的智能体可以互相发现、交换消息并协调工作，无需所有信息都经由用户中转。
- **长期任务持续推进：** 自动压缩、持久目标、心跳、定时调度、自主模式以及保留的子智能体，可以在多轮对话和终端会话之间保持进度不中断。

## 快速开始

在 macOS 或 Linux 上安装最新的稳定版本：

```bash
curl -fsSL https://app.primeintellect.ai/prime-agent/install.sh | sh
```

安装程序会下载指定版本的发布包、校验其 SHA-256 校验和、安装 `prime-agent` 命令，并可为智能体准备所需的 IPython 运行时。

在你希望 Prime Agent 工作的仓库或目录中启动它：

```bash
cd /path/to/project
prime-agent
```

首次启动时，运行 `/login` 选择订阅或 API 密钥提供商。Prime Agent 会在当前目录中工作，并可在该目录中运行命令和修改文件。请使用一次性克隆、干净的 worktree 或其他你可以检查与还原的检查点。

> [!WARNING]
> Prime Agent 会以你的用户权限执行模型生成的 Python 代码和项目命令。它的 worker 与 kernel 进程改善了生命周期隔离与恢复能力，但它们**并非**安全沙箱。请审查变更，并且只使用可信的仓库、指令、技能和扩展。请在外部沙箱或受限环境中运行不受信任的代码或指令。

常用命令：

```bash
prime-agent agents                   # 浏览正在运行、空闲和已保存的会话
prime-agent attach <agent>           # 重新挂接到正在运行的会话
prime-agent --resume <path|id>       # 恢复已保存的会话
prime-agent status                   # 检查后台服务状态
prime-agent doctor [--fix]           # 检查或修复后台服务
prime-agent update [--force]         # 更新 Prime Agent
prime-agent shutdown [--force]       # 停止所有智能体、worker 和后台服务
```

## 专为长期任务打造
Prime Agent 专为长期任务而生，尤其适用于研究中的评估工作。以下功能在 TUI 中可用，也可在自主运行时使用。

- **Continual Harness（持续框架）：** `/refine` 可以将聚焦、可审查的经验教训持久化为补充提示词、记忆、可复用的技能描述或子智能体规范，并记录完整的改进历史。它不会取代对新可执行技能的打包与审查。
- **智能体之间的直接通信：** 正在运行的智能体和保留的子智能体可以互相发现、交换消息并引导进行中的工作。
- **基于守护进程的连续性：** 活动会话、IPython 状态、定时调度和子智能体在终端断开后仍会继续运行，之后可以重新挂接。
- **心跳与定时调度：** `/heartbeat`、`rlm_heartbeat` 和 `prime-agent schedule` 可以按周期或在特定时间重新进入会话。
- **持久目标：** `/goal` 会保持一个目标及其进度在多轮对话中持续有效，直到完成、暂停或清除。
- **有边界的自主模式：** `/autonomous` 会在配置好的轮次、token 和时间预算内持续运行，并可执行用户定义的质量门。通过质量门仅表示该门所验证的内容通过；达到限制并不代表任务成功。

## 文档

- [快速开始](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/quickstart.md) — 安装、认证并运行首个会话
- [用法与 CLI 参考](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/usage.md) — 命令、会话、自主限制和输出模式
- [长期运行与后台智能体](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/long-running-agents.md) — 分离与重新挂接、目标、心跳和定时调度
- [RLM 编程模型](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/rlm.md) — 持久 IPython、子智能体、技能与信任模型
- [JSON 模式](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/json.md) 与 [RPC 模式](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/rpc.md) — 无头自动化与集成
- [技能](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/skills.md) — 安装与创建可复用能力
- [提供商配置](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/providers.md) — 订阅与 API 密钥提供商
- [架构总览](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/architecture.md) — 守护进程、worker、kernel 与持久化边界
- [开发指南](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/development.md) — 从源码构建与运行

## 致谢

我们的智能体和 TUI 构建在 [`pi`](https://github.com/earendil-works/pi) 之上。感谢 `pi` 作者们的宝贵工作。

## 许可证

Prime Agent 完全开源，采用 [MIT 许可证](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/LICENSE)。
