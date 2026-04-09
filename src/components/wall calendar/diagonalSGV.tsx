import type { CalendarStyles } from './types'

interface Props {
  color: string
  styles: CalendarStyles
}

export default function DiagonalSVG({ color, styles }: Props) {
  return (
    <div style={styles.diagonal}>
      <svg
        viewBox="0 0 420 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <polygon points="0,72 0,40 160,10 200,72" fill={color} />
        <polygon points="160,10 420,0 420,72 200,72" fill={color} />
      </svg>
    </div>
  )
}