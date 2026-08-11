import { useEffect, useState } from 'react'
import { Sparkles } from './decor'
import { SparkleIcon } from './icons'

const PANEL_CMD = 'prime-agent'

function useTypewriter(text: string, speed = 42, startDelay = 650) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      return
    }
    let interval: ReturnType<typeof setInterval> | undefined
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return count
}

const stats = [
  { value: 'MIT', label: '完全开源' },
  { value: '2', label: '核心抽象' },
  { value: '7', label: '内建能力' },
  { value: '/refine', label: '持续精炼' },
]

export default function Hero() {
  const typed = useTypewriter(PANEL_CMD, 110, 4200)

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <Sparkles className="hero-sparkles" />
      <div className="container">
        <div className="hero-center">
          <div className="hero-el" style={{ ['--i' as string]: '0ms' }}>
            <span className="hero-badge">
              <span className="dot" />
              开源 · MIT 许可 · 可商用
              <SparkleIcon className="hero-badge-sparkle" />
            </span>
          </div>

          <h1 className="hero-el" style={{ ['--i' as string]: '120ms' }}>
            <span className="accent">自我改进</span>的 AI 智能体
          </h1>

          <p className="hero-lead hero-el" style={{ ['--i' as string]: '240ms' }}>
            Prime Agent 基于递归语言模型（RLM）构建——写代码、跑命令、调用子智能体，一切皆程序化。
            会话在后台常驻，经验随时间沉淀，为长期任务而生。
          </p>
        </div>

        <div className="hero-panel-wrap hero-el" style={{ ['--i' as string]: '300ms' }}>
          <div className="agent-panel" aria-hidden="true">
            <div className="panel-bar">
              <i />
              <i />
              <i />
              <span>prime-agent · 会话 #1</span>
            </div>

            <div className="panel-line">
              <span className="cmd">$ rlm("定位依赖冲突并修复")</span>
            </div>
            <div className="panel-line">
              <span className="dim">⠿</span> 子智能体 <span className="accent">#2</span> 后台并行分析{' '}
              <span className="blue">4 个文件</span>
            </div>
            <div className="panel-line">
              <span className="ok">✓</span> 冲突定位：<span className="blue">pyproject.toml</span>
              <span className="dim"> · </span>版本约束重叠
            </div>
            <div className="panel-line">
              <span className="cmd">$ files.write(</span>
              <span className="s">"fix.patch"</span>
              <span className="cmd">, patch)</span>
            </div>
            <div className="panel-line">
              <span className="ok">✓</span> <span className="cmd">shell:</span> bun test
              <span className="dim"> → </span>
              <span className="ok">42 通过</span>
              <span className="dim"> · </span>0 失败
            </div>
            <div className="panel-line">
              <span className="cmd">$ /refine</span>
            </div>
            <div className="panel-line">
              <span className="ok">✓</span> 已沉淀 <span className="accent">1 条</span>可复用经验
              <span className="dim"> · </span>快照 #12
            </div>
            <div className="panel-line">
              <span className="cmd">$ </span>
              <span>{PANEL_CMD.slice(0, typed)}</span>
              <span className="panel-cursor" />
            </div>

            <div className="panel-chips">
              <span className="chip">IPython 持久环境</span>
              <span className="chip">/goal 持久目标</span>
              <span className="chip">技能可执行</span>
              <span className="chip">心跳 · 调度</span>
            </div>
          </div>
        </div>

        <div className="hero-stats hero-el" style={{ ['--i' as string]: '480ms' }}>
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
