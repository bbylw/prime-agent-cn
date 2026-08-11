import Reveal from './Reveal'

const items = [
  {
    title: '持续框架',
    desc: (
      <>
        <span className="mono">/refine</span> 可以把聚焦、可审查的经验教训持久化为补充提示词、记忆、可复用技能描述或子智能体规范，并记录完整的改进历史。
      </>
    ),
  },
  {
    title: '智能体之间的直接通信',
    desc: '运行中的智能体和保留的子智能体可以互相发现、交换消息并引导进行中的工作，无需经由用户中转。',
  },
  {
    title: '基于守护进程的连续性',
    desc: '活动会话、IPython 状态、定时调度和子智能体在终端断开后仍会继续运行，之后可以重新挂接。',
  },
  {
    title: '心跳与定时调度',
    desc: (
      <>
        <span className="mono">/heartbeat</span>、<span className="mono">rlm_heartbeat</span> 和 <span className="mono">prime-agent schedule</span>{' '}
        可以按周期或在特定时间重新进入会话。
      </>
    ),
  },
  {
    title: '持久目标',
    desc: (
      <>
        <span className="mono">/goal</span> 会保持一个目标及其进度在多轮对话中持续有效，直到完成、暂停或清除。
      </>
    ),
  },
  {
    title: '有边界的自主模式',
    desc: (
      <>
        <span className="mono">/autonomous</span> 在配置好的轮次、token 与时间预算内持续运行，并支持用户定义的质量门。通过质量门仅表示该项验证通过；达到限制并不代表任务成功。
      </>
    ),
  },
]

export default function LongRunning() {
  return (
    <section id="long" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Long-Running Work</span>
            <h2 className="section-title">专为长期任务打造</h2>
            <p className="section-sub">
              尤其适用于研究中的评估工作。这些能力在 TUI 中可用，也可在自主运行时使用。
            </p>
          </div>
        </Reveal>

        <div className="long-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 100}>
              <article className="long-item">
                <span className="long-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
