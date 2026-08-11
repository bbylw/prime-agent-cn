import Reveal from './Reveal'
import { CornerGrid } from './decor'
import { BrainIcon, HarnessIcon } from './icons'

export default function CoreAbstractions() {
  return (
    <section id="core" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Core Abstractions</span>
            <h2 className="section-title">两个核心抽象，撑起全部能力</h2>
            <p className="section-sub">
              一个把上下文当作变量、把子智能体当作函数调用的递归语言模型，加上一个可被持续精炼的持久框架状态。
            </p>
          </div>
        </Reveal>

        <div className="abstract-grid">
          <Reveal className="abstract-card card" delay={0}>
            <CornerGrid className="card-corner" />
            <span className="abstract-num">01 / 模型</span>
            <div className="card-icon" style={{ marginTop: 22 }}>
              <BrainIcon />
            </div>
            <h3>
              递归语言模型
              <span className="en">Recursive Language Model · RLM</span>
            </h3>
            <p>
              将上下文视为变量（提示词即变量），把递归子智能体等工具当作函数调用（程序化工具 /子智能体调用），一切都在持久的 REPL
              环境中运行。模型可以通过代码递归地调用自己。
            </p>
            <div className="abstract-visual">
              <span className="k">result</span> = <span className="c">rlm</span>(
              <span className="s">"调研依赖冲突"</span>, parallel={'{'}<span className="k">True</span>{'}'})
              <br />
              <span className="c">/sub-agent #2</span> <span className="k">returned</span> 1.4k tokens
            </div>
            <div className="abstract-tags">
              <span className="tag">prompt-as-a-variable</span>
              <span className="tag">programmatic calling</span>
            </div>
          </Reveal>

          <Reveal className="abstract-card card" delay={120}>
            <CornerGrid className="card-corner" />
            <span className="abstract-num">02 / 状态</span>
            <div className="card-icon" style={{ marginTop: 22 }}>
              <HarnessIcon />
            </div>
            <h3>
              持续框架
              <span className="en">Continual Harness</span>
            </h3>
            <p>
              把补充提示词、记忆、技能描述和可复用的子智能体规范存为持久状态。Prime Agent
              通过小规模、有证据支撑的更新不断精炼它们，默认仅在当前会话内生效。
            </p>
            <div className="abstract-visual">
              <span className="k">harness</span>.update({
              <span className="s">"lesson: 优先使用子智能体并行化"</span>})
              <br />
              <span className="ok">✓</span> <span className="c">evidence-backed</span> · snapshot {`#12`} 可回滚
            </div>
            <div className="abstract-tags">
              <span className="tag">durable state</span>
              <span className="tag">/refine</span>
              <span className="tag">rollback</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
