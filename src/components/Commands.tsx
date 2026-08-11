import Reveal from './Reveal'
import { TerminalIcon } from './icons'

const commands = [
  { cmd: 'prime-agent agents', desc: '浏览运行中、空闲与已保存的会话' },
  { cmd: 'prime-agent attach <agent>', desc: '重新挂接运行中的会话' },
  { cmd: 'prime-agent --resume <path|id>', desc: '恢复已保存的会话' },
  { cmd: 'prime-agent status', desc: '检查后台服务状态' },
  { cmd: 'prime-agent doctor [--fix]', desc: '检查或修复后台服务' },
  { cmd: 'prime-agent update [--force]', desc: '更新 Prime Agent' },
  { cmd: 'prime-agent shutdown [--force]', desc: '停止所有智能体、worker 与后台服务' },
]

export default function Commands() {
  return (
    <section id="commands" className="section section--tight">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">CLI Reference</span>
            <h2 className="section-title">常用命令</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="command-window">
            <div className="command-bar">
              <i />
              <i />
              <i />
              <span className="command-bar-title">
                <TerminalIcon />
                prime-agent --help
              </span>
            </div>
            <div className="command-list">
              {commands.map((c) => (
                <div className="command-row" key={c.cmd}>
                  <code>{c.cmd}</code>
                  <span className="desc">
                    <span className="hl">#</span> {c.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
