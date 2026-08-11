import Reveal from './Reveal'
import { ArrowUpRightIcon, DocIcon } from './icons'

const BASE = 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs'

const docs = [
  { href: `${BASE}/quickstart.md`, title: '快速开始', desc: '安装、认证并运行首个会话' },
  { href: `${BASE}/usage.md`, title: '用法与 CLI 参考', desc: '命令、会话、自主限制与输出模式' },
  { href: `${BASE}/long-running-agents.md`, title: '长期运行与后台智能体', desc: '分离与挂接、目标、心跳与调度' },
  { href: `${BASE}/rlm.md`, title: 'RLM 编程模型', desc: '持久 IPython、子智能体与信任模型' },
  { href: `${BASE}/json.md`, title: 'JSON 模式', desc: '无头自动化与集成' },
  { href: `${BASE}/rpc.md`, title: 'RPC 模式', desc: '无头自动化与集成' },
  { href: `${BASE}/skills.md`, title: '技能', desc: '安装与创建可复用能力' },
  { href: `${BASE}/providers.md`, title: '提供商配置', desc: '订阅与 API 密钥提供商' },
  { href: `${BASE}/architecture.md`, title: '架构总览', desc: '守护进程、worker、kernel 与持久化边界' },
  { href: `${BASE}/development.md`, title: '开发指南', desc: '从源码构建与运行' },
]

export default function DocsSection() {
  return (
    <section id="docs" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Documentation</span>
            <h2 className="section-title">深入文档</h2>
            <p className="section-sub">从安装配置到架构实现，官方文档系统覆盖每个角落。</p>
            <div className="section-head-action">
              <a
                className="btn btn--ghost"
                href="https://github.com/PrimeIntellect-ai/prime-agent/tree/main/packages/coding-agent/docs"
                target="_blank"
                rel="noreferrer"
              >
                浏览全部文档
                <ArrowUpRightIcon className="btn-icon" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="doc-grid">
          {docs.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 80} className="doc-cell">
              <a href={d.href} target="_blank" rel="noreferrer" aria-label={`${d.title}（新窗口打开）`}>
                <span className="doc-top">
                  <span className="doc-index">{String(i + 1).padStart(2, '0')}</span>
                  <DocIcon className="doc-icon" />
                </span>
                <h3>
                  {d.title}
                  <ArrowUpRightIcon />
                </h3>
                <p>{d.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
