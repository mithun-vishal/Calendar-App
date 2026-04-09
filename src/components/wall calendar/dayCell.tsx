import type { CSSProperties } from 'react'
import { MONTHS, HOLIDAYS } from './constants'
import { toTs, toDk, hexToRgba } from './helpers'
import type { CalendarStyles } from './types'

interface Props {
  day: number
  cellIndex: number
  year: number
  month: number
  rsTs: number | null
  reTs: number | null
  accentColor: string
  noteKeys: Set<string>
  showHolidays: boolean
  today: Date
  onDayClick: (d: number) => void
  styles: CalendarStyles
}

export default function DayCell({
  day, cellIndex, year, month,
  rsTs, reTs, accentColor,
  noteKeys, showHolidays,
  today, onDayClick, styles,
}: Props) {
  const dow     = cellIndex % 7
  const dts     = toTs(year, month, day)
  const isRs    = rsTs !== null && dts === rsTs
  const isRe    = reTs !== null && dts === reTs
  const inRange = rsTs !== null && reTs !== null && dts > rsTs && dts < reTs
  const isToday =
    year  === today.getFullYear() &&
    month === today.getMonth()    &&
    day   === today.getDate()

  const hKey      = `${month + 1}-${day}`
  const isHoliday = showHolidays && Boolean(HOLIDAYS[hKey])
  const hasNote   = noteKeys.has(toDk(year, month, day))

  let bg: string           = 'transparent'
  let color: string        = dow >= 5 ? accentColor : (styles.day.color as string)
  let borderRadius: string = '50%'
  let border: string       = 'none'
  let fontWeight: number   = 400

  if (isToday) {
    border     = `1.5px solid ${accentColor}`
    color      = accentColor
    fontWeight = 700
  }
  if (isRs || isRe) {
    bg         = accentColor
    color      = '#fff'
    fontWeight = 600
    border     = 'none'
  } else if (inRange) {
    bg           = hexToRgba(accentColor, 0.15)
    borderRadius = '0'
  }

  const cellStyle: CSSProperties = {
    ...styles.day,
    background: bg,
    color,
    borderRadius,
    border,
    fontWeight,
  }

  const dotColor = isRs || isRe ? 'rgba(255,255,255,0.75)' : accentColor

  return (
    <div
      onClick={() => onDayClick(day)}
      onKeyDown={(e) => e.key === 'Enter' && onDayClick(day)}
      tabIndex={0}
      role="button"
      title={isHoliday ? HOLIDAYS[hKey] : undefined}
      aria-label={`${MONTHS[month]} ${day}, ${year}${isHoliday ? ' – ' + HOLIDAYS[hKey] : ''}`}
      style={cellStyle}
    >
      {day}

      {/* Holiday indicator — top-right red dot */}
      {isHoliday && (
        <span style={{
          position: 'absolute', top: 2, right: 2,
          width: 4, height: 4, borderRadius: '50%',
          background: '#e05252', display: 'block',
        }} />
      )}

      {/* Note indicator — bottom-center accent dot */}
      {hasNote && (
        <span style={{ ...styles.noteDot, background: dotColor }} />
      )}
    </div>
  )
}