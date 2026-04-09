import type { CalendarStyles } from './types'

interface Props {
  daysInMonth: number
  notesCount: number
  accentColor: string
  styles: CalendarStyles
}

const STAT_ITEMS = (daysInMonth: number, notesCount: number) => [
  { val: daysInMonth, label: 'Days'  },
  { val: notesCount,  label: 'Notes' },
]

export default function MiniStats({ daysInMonth, notesCount, accentColor, styles }: Props) {
  return (
    <div style={styles.miniStats}>
      {STAT_ITEMS(daysInMonth, notesCount).map(({ val, label }) => (
        <div key={label} style={styles.stat}>
          <div style={{ ...styles.statVal, color: accentColor }}>{val}</div>
          <div style={styles.statLbl}>{label}</div>
        </div>
      ))}
    </div>
  )
}   