import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { CornerGrid } from './decor'
import {
  BotIcon,
  ClockIcon,
  CodeIcon,
  MessageIcon,
  PuzzleIcon,
  RefreshIcon,
  ServerIcon,
} from './icons'

type Feature = {
  title: string
  desc: string
  icon: ReactNode
  code?: ReactNode
  accent?: boolean
  full?: boolean
  tags?: string[]
  link?: { href: string; label: string }
}

const features: Feature[] = [
  {
    title: '一切皆程序化',
    desc: '持久化的 IPython 是内置的模型工具。文件操作、shell 命令、工具调用、子智能体与上下文管理，全部通过代码完成——模型写代码，代码驱动一切。',
    icon: <CodeIcon />,
    code: (
      <>
        <span className="k">files</span>.write(<span className="s">"plan.md"</span>, content)
      </>
    ),
    accent: true,
  },
  {
    title: '内置子智能体',
    desc: 'rlm(...) 会生成真实的子智能体，用于并行或后台工作，并以程序化方式返回结果，无需把一切经由用户中转。',
    icon: <BotIcon />,
    code: (
      <>
        <span className="k">result</span> = <span className="accent">rlm</span>(<span className="s">"..."</span>)
      </>
    ),
  },
  {
    title: '框架可自我改进',
    desc: '/refine 审查当前执行轨迹，并应用小规模、有证据支撑的更新。它绝不重写不可变的基础系统提示词，快照支持回滚。',
    icon: <RefreshIcon />,
    code: (
      <>
        <span className="accent">/refine</span> <span className="dim">→ 1 条更新已应用</span>
      </>
    ),
  },
  {
    title: '技能是可执行的',
    desc: '技能是可导入的 Python 包。内置的技能创建器可以把重复性工作流转化为项目技能或个人技能。',
    icon: <PuzzleIcon />,
  },
  {
    title: '会话在后台运行',
    desc: '基于守护进程的智能体，在终端断开连接后仍会继续运行，之后可以随时重新挂接。',
    icon: <ServerIcon />,
  },
  {
    title: '智能体之间可直接通信',
    desc: '运行中的智能体可以互相发现、交换消息并协调彼此的工作，不需要所有信息都经过用户这一层。',
    icon: <MessageIcon />,
  },
  {
    title: '长期任务持续推进',
    desc: '自动压缩、持久目标、心跳、定时调度、自主模式与保留的子智能体，共同保证进度在轮次之间、终端会话之间都不中断。',
    icon: <ClockIcon />,
    full: true,
    tags: ['/goal', '/heartbeat', '/autonomous', '自动压缩', '保留子智能体'],
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title">为长期、复杂的任务而设计</h2>
            <p className="section-sub">
              七个内建能力协同工作：模型通过代码驱动环境，子智能体并行推进，框架自己会学习——让有用的工作上下文超越单个聊天窗口。
            </p>
          </div>
        </Reveal>

        <div className="feature-grid">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 90}
              className={`card ${f.accent ? 'card--accent' : ''} ${f.full ? 'feature-full' : ''}`}
            >
              {f.full && <CornerGrid className="card-corner" />}
              <div className="card-icon">{f.icon}</div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
              {f.full && f.tags && (
                <div className="feature-tags">
                  {f.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {f.code && <div className="mini-code">{f.code}</div>}
              {f.link && (
                <a className="card-link" href={f.link.href}>
                  {f.link.label}
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
