import { useState, useCallback, useMemo } from 'react'
import { THEMES } from './constants'
import { toTs, toDk, rangeDescription } from './helpers'
import { makeStyles } from './styles'
import type { CalDate, Note } from './types'
import Binding from './binding'
import HeroPhoto from './heroPhoto'
import ThemePicker from './themePicker'
import WeatherBadge from './weatherBadge.tsx'
import NoteLines from './noteLines.tsx'
import CalendarGrid from './calendarGrid'
import './calendar-mobile.css'

export default function WallCalendar() {
  const today = new Date()

  const [cur, setCur]           = useState<CalDate>({ y: today.getFullYear(), m: today.getMonth(), d: 1 })
  const [photoIdx, setPhotoIdx] = useState<number>(today.getMonth())
  const [themeIdx, setThemeIdx] = useState<number>(0)
  const [dark, setDark]         = useState<boolean>(false)
  const [showHolidays, setShowHolidays] = useState<boolean>(true)
  const [rangeStart, setRangeStart]     = useState<CalDate | null>(null)
  const [rangeEnd, setRangeEnd]         = useState<CalDate | null>(null)
  const [showPopup, setShowPopup]       = useState<boolean>(false)

  const [notes, setNotes] = useState<Note[]>(() => {
    try { return JSON.parse(localStorage.getItem('wcal3_notes') ?? '[]') }
    catch { return [] }
  })

  const accent = THEMES[themeIdx].accent
  const S = useMemo(() => makeStyles(accent, dark), [accent, dark])

  const saveNotes = useCallback((next: Note[]): void => {
    setNotes(next)
    try { localStorage.setItem('wcal3_notes', JSON.stringify(next)) } catch {}
  }, [])

  const prevMonth = (): void =>
    setCur(({ y, m }) => m === 0 ? { y: y - 1, m: 11, d: 1 } : { y, m: m - 1, d: 1 })
  const nextMonth = (): void =>
    setCur(({ y, m }) => m === 11 ? { y: y + 1, m: 0, d: 1 } : { y, m: m + 1, d: 1 })

  const handleDayClick = (d: number): void => {
    const { y, m } = cur
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart({ y, m, d })
      setRangeEnd(null)
      setShowPopup(false)
    } else {
      setRangeEnd({ y, m, d })
      setShowPopup(true)
    }
  }

  const handleSaveNote = (text: string): void => {
    let a = rangeStart!, b = rangeEnd!
    if (toTs(a.y, a.m, a.d) > toTs(b.y, b.m, b.d)) [a, b] = [b, a]
    saveNotes([
      ...notes,
      {
        dk:    toDk(a.y, a.m, a.d),
        label: rangeDescription(rangeStart, rangeEnd) ?? '',
        text,
        y: cur.y,
        m: cur.m,
      },
    ])
    setShowPopup(false)
  }

  const handleDeleteNote = (idx: number): void =>
    saveNotes(notes.filter((_, i) => i !== idx))

  return (
    <div style={S.root} className="wcal-root">
      <h2 style={S.srOnly}>Interactive wall calendar</h2>

      <div style={S.paper}>

        {/* ── Top bar ── */}
        <div style={S.topBar} className="wcal-topbar">
          <Binding styles={S} />
          <div style={S.controls}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                fontSize: 10, fontWeight: 600, letterSpacing: 0.5,
                color: dark ? '#9a9da5' : '#6b6e78',
                transition: 'color 0.3s',
                userSelect: 'none',
              }}>
                {dark ? '🌙' : '☀️'}
              </span>
              <button
                style={S.darkToggleTrack(dark)}
                onClick={() => setDark((d) => !d)}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={dark}
              >
                <span style={S.darkToggleThumb(dark)}>
                  {dark ? '🌙' : '☀️'}
                </span>
              </button>
            </div>
            <button
              style={S.iconBtn(showHolidays)}
              onClick={() => setShowHolidays((h) => !h)}
              aria-label="Toggle holidays"
            >
              Holidays
            </button>
          </div>
        </div>

        {/* ── Hero photo ── */}
        <HeroPhoto
          month={cur.m}
          year={cur.y}
          photoIdx={photoIdx}
          accentColor={accent}
          onPrevPhoto={() => setPhotoIdx((p) => (p + 11) % 12)}
          onNextPhoto={() => setPhotoIdx((p) => (p + 1) % 12)}
          styles={S}
        />

        {/* ── Toolbar ── */}
        <div style={S.toolbar}>
          <span style={S.themeLabel}>Theme</span>
          <ThemePicker themeIdx={themeIdx} onSelect={setThemeIdx} styles={S} />
          <div style={S.sep} />
          <WeatherBadge month={cur.m} styles={S} />
        </div>

        {/* ── Bottom panel ── */}
        <div style={S.bottom} className="wcal-bottom">
          <NoteLines year={cur.y} month={cur.m} styles={S} />


          <CalendarGrid
            year={cur.y}
            month={cur.m}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            onDayClick={handleDayClick}
            showPopup={showPopup}
            onSaveNote={handleSaveNote}
            onCancelPopup={() => setShowPopup(false)}
            notes={notes}
            onDeleteNote={handleDeleteNote}
            accentColor={accent}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
            onSetMonth={(m) => setCur(c => ({ ...c, m, d: 1 }))}
            onSetYear={(y) => setCur(c => ({ ...c, y, d: 1 }))}
            showHolidays={showHolidays}
            styles={S}
          />
        </div>

      </div>
    </div>
  )
}