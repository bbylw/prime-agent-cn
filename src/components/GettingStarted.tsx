import Reveal from './Reveal'
import { AlertIcon, KeyIcon, PlayIcon, RocketIcon } from './icons'

const steps = [
  {
    icon: <RocketIcon />,
    title: '安装',
    desc: '安装程序会下载指定版本的发布包、校验 SHA-256 校验和，并安装 prime-agent 命令。',
    cmd: (
      <>
        <span className="prompt">$</span> curl -fsSL https://app.primeintellect.ai/prime-agent/install.sh | sh
      </>
    ),
  },
  {
    icon: <PlayIcon />,
    title: '启动',
    desc: '进入希望 Prime Agent 工作的仓库或目录，直接启动。它会以你的身份在目录中运行命令、修改文件。',
    cmd: (
      <>
        <span className="prompt">$</span> cd /path/to/project
        <br />
        <span className="prompt">$</span> prime-agent
      </>
    ),
  },
  {
    icon: <KeyIcon />,
    title: '登录',
    desc: '首次启动时运行 /login，选择订阅或 API 密钥提供商，即可开始第一个会话。',
    cmd: (
      <>
        <span className="prompt">prime-agent&gt;</span> /login
      </>
    ),
  },
]

export default function GettingStarted() {
  return (
    <section id="quickstart" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Getting Started</span>
            <h2 className="section-title">三步开始使用</h2>
            <p className="section-sub">支持 macOS 与 Linux，通过一条命令完成安装、校验与运行时准备。</p>
          </div>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" delay={i * 110} key={s.title}>
              <div className="step-head">
                <span className="step-icon">{s.icon}</span>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="step-cmd">{s.cmd}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="callout" role="note">
            <AlertIcon className="callout-icon" />
            <div>
              <b>安全提示</b>
              <p>
                Prime Agent 会以你的用户权限执行模型生成的 Python 代码和项目命令。它的 worker 与 kernel
                进程改善了生命周期隔离与恢复能力，但它们并非安全沙箱。请审查变更，只使用可信的仓库、指令、技能和扩展；在外部沙箱或受限环境中运行不受信任的代码。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
