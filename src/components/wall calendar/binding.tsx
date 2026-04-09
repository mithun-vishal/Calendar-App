import type { CalendarStyles } from './types'

interface Props {
  styles: CalendarStyles
}

export default function Binding({ styles }: Props) {
  return (
    <div style={styles.rings} className="wcal-rings">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} style={styles.ring} />
      ))}
    </div>
  )
}