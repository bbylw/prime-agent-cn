type IconProps = {
  className?: string
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

/* ---------- 通用 ---------- */

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
      <circle cx="17" cy="7" r="1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

/* ---------- 功能图标 ---------- */

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 4l1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" />
      <path
        d="M18.6 15.4l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z"
        fill="var(--accent)"
        stroke="none"
      />
    </svg>
  )
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="m7 9 3 3-3 3M12.5 15H17" />
      <circle cx="6" cy="6.8" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 15.5c-1.6-1.5-2-4.7-.7-7.3 2.2-.9 4.6-.6 6.1.9s1.8 3.9.9 6.1c-2.6 1.3-5.8.9-7.3-.7" />
      <path d="M8.5 9.5c-1 .7-1.7 1.7-2 3M9.5 15.5c-.7 1-1.7 1.7-3 2M7 17c-1.5 1.5-2 4-2 4s2.5-.5 4-2" opacity="0.55" />
      <circle cx="14.2" cy="9.8" r="1.1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 8.8v6.4L15.3 12 10 8.8Z" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="7.5" cy="14" r="4" />
      <path d="M10.5 11 19 2.5M15 7l2.5 2.5M17.5 4.5l1.5 1.5" />
      <circle cx="7.5" cy="14" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function DocIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" opacity="0.55" />
      <path d="M9 13h6M9 17h4" />
      <circle cx="17.5" cy="17.5" r="1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function BrainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 5a3 3 0 0 0-5.7 1.2A3.5 3.5 0 0 0 4.5 13a3.5 3.5 0 0 0 .8 6.9A3 3 0 0 0 12 21a3 3 0 0 0 6.7-1.1 3.5 3.5 0 0 0 .8-6.9 3.5 3.5 0 0 0-1.8-6.8A3 3 0 0 0 12 5Z" />
      <path d="M12 5v16M12 9.5l2.8 2.2M12 14.5l-2.4 2" opacity="0.55" />
      <circle cx="12" cy="8" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function HarnessIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 4v16M15 4v16M4 9h16M4 15h16" opacity="0.35" />
      <path d="M8.5 12h3l1.2-2.4 2.8 4.8 1.2-2.4h3.3" opacity="0.75" />
      <circle cx="16.5" cy="16.5" r="1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20.5C7.2 17.3 4 14.3 4 10.7 4 8.8 5.5 7.3 7.5 7.3c1.2 0 2.3.7 3 1.7a3.6 3.6 0 0 1 3-1.7c2 0 3.5 1.5 3.5 3.4 0 3.6-3.2 6.6-8 9.8Z" />
      <circle cx="12" cy="12" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

/* ---------- 现有功能图标（升级） ---------- */

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
      <circle cx="12" cy="12" r="1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <circle cx="12" cy="8" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3" />
      <path d="M20 4v4h-4M4 20v-4h4" />
      <circle cx="20" cy="4" r="1.1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function PuzzleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M10 4a2 2 0 0 1 4 0v1h2.5A2.5 2.5 0 0 1 19 7.5V10h1a2 2 0 0 1 0 4h-1v2.5A2.5 2.5 0 0 1 16.5 19H14v1a2 2 0 0 1-4 0v-1H7.5A2.5 2.5 0 0 1 5 16.5V14H4a2 2 0 0 1 0-4h1V7.5A2.5 2.5 0 0 1 7.5 5H10V4Z" />
      <circle cx="12" cy="12" r="1" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function ServerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
      <circle cx="17" cy="7.5" r="1.2" fill="var(--green)" stroke="none" opacity="0.9" />
      <circle cx="17" cy="16.5" r="1.2" fill="var(--accent)" stroke="none" opacity="0.9" />
    </svg>
  )
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.4-4.2-1L3 20l1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <circle cx="12" cy="12" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function BotIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="2.5" />
      <path d="M12 8V4M8 4h8" />
      <path d="M9 13h.01M15 13h.01M12 16.5v.01" strokeWidth="2" />
      <circle cx="6.5" cy="10.5" r="0.9" fill="var(--accent)" stroke="none" />
    </svg>
  )
}

export function AlertIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.5 2.8 20h18.4L12 3.5Z" />
      <path d="M12 10.5v4M12 17.5h.01" strokeWidth="1.9" />
    </svg>
  )
}

/* ---------- 品牌 Logo ---------- */

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="7.5" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6.5" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="17.5" cy="16.5" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M10.6 9.8 8 14.6M13.4 9.8 16 14.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
      <circle cx="12" cy="7.5" r="0.9" fill="var(--accent)" stroke="none" />
      <circle cx="6.5" cy="16.5" r="0.7" fill="var(--accent)" stroke="none" opacity="0.7" />
      <circle cx="17.5" cy="16.5" r="0.7" fill="var(--accent)" stroke="none" opacity="0.7" />
    </svg>
  )
}
