import { useEffect, useState } from 'react'
import { GithubIcon, LogoMark } from './icons'

const links = [
  { href: '#core', label: '核心抽象' },
  { href: '#features', label: '特性' },
  { href: '#quickstart', label: '快速开始' },
  { href: '#commands', label: '命令行' },
  { href: '#docs', label: '文档' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Prime Agent 首页">
          <span className="brand-mark">
            <LogoMark />
          </span>
          Prime Agent
        </a>

        <nav aria-label="主导航">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a
            className="btn btn--ghost"
            href="https://github.com/PrimeIntellect-ai/prime-agent"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="btn-icon" />
          </a>
          <a className="btn btn--primary" href="#quickstart">
            快速开始
          </a>
          <button
            className="burger"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-label="移动端菜单">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
