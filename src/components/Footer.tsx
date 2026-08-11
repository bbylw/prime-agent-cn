import { GithubIcon, HeartIcon, LogoMark } from './icons'

const docLinks = [
  { href: 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/quickstart.md', label: '快速开始' },
  { href: 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/usage.md', label: '用法与 CLI 参考' },
  { href: 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/rlm.md', label: 'RLM 编程模型' },
  { href: 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/architecture.md', label: '架构总览' },
  { href: 'https://github.com/PrimeIntellect-ai/prime-agent/blob/main/packages/coding-agent/docs/development.md', label: '开发指南' },
]

const related = [
  { href: 'https://github.com/PrimeIntellect-ai/verifiers', label: 'Verifiers' },
  { href: 'https://github.com/PrimeIntellect-ai/prime-rl', label: 'PRIME-RL' },
  { href: 'https://github.com/badlogic/pi-mono', label: 'pi-mono' },
  { href: 'https://github.com/earendil-works/pi', label: 'pi' },
  { href: 'https://arxiv.org/abs/2605.09998', label: 'Continual Harness 论文' },
  { href: 'https://www.primeintellect.ai/blog/rlm', label: 'RLM 博客' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand" aria-label="回到顶部">
              <span className="brand-mark">
                <LogoMark />
              </span>
              Prime Agent
            </a>
            <p className="footer-about">
              一个自我改进的开源编码与研究智能体，面向通用与长期任务。基于递归语言模型（RLM）与持续框架（Continual Harness）构建。
            </p>
          </div>

          <div>
            <h4>文档</h4>
            <ul className="footer-links">
              {docLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>相关项目</h4>
            <ul className="footer-links">
              {related.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            <HeartIcon className="footer-heart" />
            致谢：我们的智能体与 TUI 构建于{' '}
            <a href="https://github.com/earendil-works/pi" target="_blank" rel="noreferrer">
              pi
            </a>{' '}
            之上。
          </span>
          <span>
            <a href="https://github.com/PrimeIntellect-ai/prime-agent" target="_blank" rel="noreferrer">
              <GithubIcon className="btn-icon footer-github" />
              GitHub
            </a>
            {' · '}
            <a
              href="https://github.com/PrimeIntellect-ai/prime-agent/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              MIT License
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
