import { WEATHER_BY_MONTH } from './constants'
import type { CalendarStyles } from './types'

interface Props {
  month: number
  styles: CalendarStyles
}

export default function WeatherBadge({ month, styles }: Props) {
  const { icon, label } = WEATHER_BY_MONTH[month]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: 'auto' }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{ ...styles.navLabel, fontSize: 11 }}>{label}</span>
    </div>
  )
}