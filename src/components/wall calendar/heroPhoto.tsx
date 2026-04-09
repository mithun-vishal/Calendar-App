import { MONTHS, MONTH_PHOTOS } from './constants'
import type { CalendarStyles } from './types'
import DiagonalSVG from './diagonalSGV'

interface Props {
  month: number
  year: number
  photoIdx: number
  accentColor: string
  onPrevPhoto: () => void
  onNextPhoto: () => void
  styles: CalendarStyles
}

export default function HeroPhoto({
  month, year, photoIdx, accentColor,
  onPrevPhoto, onNextPhoto, styles,
}: Props) {
  return (
    <div style={styles.photoPanel} className="wcal-photo-panel">
      <img
        src={MONTH_PHOTOS[photoIdx]}
        alt={`${MONTHS[month]} ${year}`}
        style={styles.heroImg}
      />
      <button
        onClick={onPrevPhoto}
        style={{ ...styles.pnavBtn, left: 8 }}
        aria-label="Previous photo"
        className="wcal-pnav-btn"
      >‹</button>
      <button
        onClick={onNextPhoto}
        style={{ ...styles.pnavBtn, right: 8 }}
        aria-label="Next photo"
        className="wcal-pnav-btn"
      >›</button>

      <DiagonalSVG color={accentColor} styles={styles} />

      <div style={styles.monthBadge}>
        <span style={styles.yearLabel}>{year}</span>
        <span style={styles.monthLabel} className="wcal-month-label">{MONTHS[month].toUpperCase()}</span>
      </div>
    </div>
  )
}