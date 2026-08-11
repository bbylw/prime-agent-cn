const keywords = [
  'RLM',
  'Continual Harness',
  '递归语言模型',
  '子智能体',
  '持久 IPython',
  '/refine',
  '/goal',
  '/autonomous',
  '心跳',
  '定时调度',
  '技能',
  'JSON 模式',
  'RPC 模式',
  'MIT 开源',
  '长期任务',
]

function Row() {
  return (
    <div className="marquee-item" aria-hidden="true">
      {keywords.map((k) => (
        <span key={k}>
          {k} <i />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  )
}
