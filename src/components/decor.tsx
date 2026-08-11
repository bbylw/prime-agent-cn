/* 装饰性 SVG 组件：光点 + 角落网格 */

type DecorProps = {
  className?: string
}

function Star({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <path
      d={`M${x} ${y - size} L${x + size * 0.32} ${y - size * 0.32} L${x + size} ${y} L${x + size * 0.32} ${y + size * 0.32} L${x} ${y + size} L${x - size * 0.32} ${y + size * 0.32} L${x - size} ${y} L${x - size * 0.32} ${y - size * 0.32} Z`}
      fill="currentColor"
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

/** 呼吸闪烁的星点簇，用于背景装饰（定位由父容器控制） */
export function Sparkles({ className }: DecorProps) {
  const stars = [
    { x: 10, y: 22, size: 3, delay: 0 },
    { x: 92, y: 10, size: 2.2, delay: 1.1 },
    { x: 82, y: 34, size: 1.7, delay: 2.3 },
    { x: 20, y: 8, size: 2.4, delay: 0.6 },
    { x: 62, y: 4, size: 1.6, delay: 1.8 },
    { x: 32, y: 30, size: 2, delay: 2.9 },
    { x: 70, y: 22, size: 1.4, delay: 0.3 },
    { x: 44, y: 12, size: 1.8, delay: 1.5 },
  ]

  return (
    <svg viewBox="0 0 100 100" className={`sparkles ${className ?? ''}`} aria-hidden="true">
      {stars.map((s, i) => (
        <Star key={i} {...s} />
      ))}
    </svg>
  )
}

/** 卡片角落的网格点阵装饰（SVG），配合 CSS 定位到卡片右上角 */
export function CornerGrid({ className }: DecorProps) {
  const dots: { x: number; y: number }[] = []
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if (r * 6 + c > 20) continue // 只画三角区域
      dots.push({ x: 8 + c * 7, y: 8 + r * 7 })
    }
  }

  return (
    <svg viewBox="0 0 100 100" className={`corner-grid ${className ?? ''}`} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1" opacity="0.45">
        {dots.map((d, i) => (
          <path key={i} d={`M${d.x} ${d.y - 1.4} v2.8M${d.x - 1.4} ${d.y} h2.8`} strokeLinecap="round" />
        ))}
      </g>
      <path
        d="M10 62 V10 H62"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="66" cy="10" r="1.6" fill="var(--accent)" stroke="none" opacity="0.9" />
    </svg>
  )
}
