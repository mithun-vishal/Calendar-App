import { THEMES } from './constants'
import type { CalendarStyles } from './types'

interface Props {
  themeIdx: number
  onSelect: (i: number) => void
  styles: CalendarStyles
}

export default function ThemePicker({ themeIdx, onSelect, styles }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      {THEMES.map((t, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          title={t.name}
          aria-label={`Theme: ${t.name}`}
          style={{ ...styles.themeDot(i === themeIdx), background: t.accent }}
        />
      ))}
    </div>
  )
}