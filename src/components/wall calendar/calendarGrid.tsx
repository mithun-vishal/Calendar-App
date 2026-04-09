import { MONTHS, WEEKDAYS } from './constants'
import { toTs, buildMonthGrid, rangeDescription } from './helpers'
import type { CalDate, Note, NoteWithIndex, CalendarStyles } from './types'
import DayCell from './dayCell'
import NotePopup from './notePopup'
import NotesList from './notesList'
import MiniStats from './miniStats'

interface Props {
  year: number
  month: number
  rangeStart: CalDate | null
  rangeEnd: CalDate | null
  onDayClick: (d: number) => void
  showPopup: boolean
  onSaveNote: (text: string) => void
  onCancelPopup: () => void
  notes: Note[]
  onDeleteNote: (idx: number) => void
  accentColor: string
  onPrevMonth: () => void
  onNextMonth: () => void
  onSetMonth: (m: number) => void
  onSetYear: (y: number) => void
  showHolidays: boolean
  styles: CalendarStyles
}

export default function CalendarGrid({
  year, month, rangeStart, rangeEnd,
  onDayClick, showPopup, onSaveNote, onCancelPopup,
  notes, onDeleteNote, accentColor,
  onPrevMonth, onNextMonth, onSetMonth, onSetYear,
  showHolidays, styles,
}: Props) {
  const today       = new Date()
  const cells       = buildMonthGrid(year, month)
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  let rsTs: number | null = rangeStart ? toTs(rangeStart.y, rangeStart.m, rangeStart.d) : null
  let reTs: number | null = rangeEnd   ? toTs(rangeEnd.y,   rangeEnd.m,   rangeEnd.d)   : null
  if (rsTs !== null && reTs !== null && rsTs > reTs) [rsTs, reTs] = [reTs, rsTs]

  const noteKeys: Set<string> = new Set(
    notes.filter((n) => n.y === year && n.m === month).map((n) => n.dk)
  )
  const monthNotes: NoteWithIndex[] = notes
    .map((n, i) => ({ ...n, origIdx: i }))
    .filter((n) => n.y === year && n.m === month)

  const rangeDesc = rangeDescription(rangeStart, rangeEnd)

  return (
    <div style={styles.gridCol}>

      {/* Month navigation */}
      <div style={styles.monthNav}>
        <button onClick={onPrevMonth} style={styles.navBtn} aria-label="Previous month">‹</button>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <select 
            value={month}
            onChange={(e) => onSetMonth(Number(e.target.value))}
            style={{ ...styles.navLabel, background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }}
          >
            {MONTHS.map((mName, i) => (
              <option key={i} value={i}>{mName.slice(0, 3)}</option>
            ))}
          </select>
          <select 
            value={year}
            onChange={(e) => onSetYear(Number(e.target.value))}
            style={{ ...styles.navLabel, background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }}
          >
            {Array.from({ length: 21 }).map((_, i) => {
              const y = new Date().getFullYear() - 10 + i
              return <option key={y} value={y}>{y}</option>
            })}
          </select>
        </div>
        <button onClick={onNextMonth} style={styles.navBtn} aria-label="Next month">›</button>
      </div>

      {/* Weekday headers */}
      <div style={styles.wdRow}>
        {WEEKDAYS.map((d, i) => (
          <div key={d} style={styles.wd(i >= 5)}>{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div style={styles.daysGrid}>
        {cells.map((cell, i) =>
          !cell.current ? (
            <div key={i} style={styles.dayOther}>{cell.day}</div>
          ) : (
            <DayCell
              key={i}
              day={cell.day}
              cellIndex={i}
              year={year}
              month={month}
              rsTs={rsTs}
              reTs={reTs}
              accentColor={accentColor}
              noteKeys={noteKeys}
              showHolidays={showHolidays}
              today={today}
              onDayClick={onDayClick}
              styles={styles}
            />
          )
        )}
      </div>

      {/* Range description */}
      <div style={styles.rangeLbl}>
        <span style={{ color: accentColor, fontWeight: 600 }}>
          {rangeDesc ?? 'Click a day to start selection'}
        </span>
      </div>

      {/* Stats */}
      <MiniStats
        daysInMonth={daysInMonth}
        notesCount={monthNotes.length}
        accentColor={accentColor}
        styles={styles}
      />

      {/* Note popup */}
      {showPopup && (
        <NotePopup
          label={rangeDesc}
          accent={accentColor}
          onSave={onSaveNote}
          onCancel={onCancelPopup}
          styles={styles}
        />
      )}

      {/* Saved notes */}
      <NotesList
        notes={monthNotes}
        accentColor={accentColor}
        onDelete={onDeleteNote}
        styles={styles}
      />
    </div>
  )
}