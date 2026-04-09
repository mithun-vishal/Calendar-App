import type { CSSProperties } from 'react'

// ── Date / range 

export interface CalDate {
  y: number
  m: number
  d: number
}

export interface GridCell {
  day: number
  current: boolean
}

// ── Notes 

export interface Note {
  dk: string       // date key: "YYYY-MM-DD"
  label: string    // human-readable range label
  text: string
  y: number
  m: number
}

export interface NoteWithIndex extends Note {
  origIdx: number
}

// ── Themes 

export interface Theme {
  accent: string
  name: string
}

// ── Weather

export interface WeatherEntry {
  icon: string
  label: string
}

// ── Styles

export interface CalendarStyles {
  srOnly: CSSProperties
  root: CSSProperties
  paper: CSSProperties
  topBar: CSSProperties
  rings: CSSProperties
  ring: CSSProperties
  controls: CSSProperties
  iconBtn: (active: boolean) => CSSProperties
  darkToggleTrack: (dark: boolean) => CSSProperties
  darkToggleThumb: (dark: boolean) => CSSProperties
  photoPanel: CSSProperties
  heroImg: CSSProperties
  pnavBtn: CSSProperties
  diagonal: CSSProperties
  monthBadge: CSSProperties
  yearLabel: CSSProperties
  monthLabel: CSSProperties
  toolbar: CSSProperties
  themeLabel: CSSProperties
  themeDot: (active: boolean) => CSSProperties
  sep: CSSProperties
  bottom: CSSProperties
  notesCol: CSSProperties
  notesTitle: CSSProperties
  noteLine: CSSProperties
  noteLineInput: CSSProperties
  gridCol: CSSProperties
  monthNav: CSSProperties
  navBtn: CSSProperties
  navLabel: CSSProperties
  wdRow: CSSProperties
  wd: (isWeekend: boolean) => CSSProperties
  daysGrid: CSSProperties
  day: CSSProperties
  dayOther: CSSProperties
  noteDot: CSSProperties
  rangeLbl: CSSProperties
  miniStats: CSSProperties
  stat: CSSProperties
  statVal: CSSProperties
  statLbl: CSSProperties
  popup: CSSProperties
  popupLabel: CSSProperties
  popupInput: CSSProperties
  popupRow: CSSProperties
  btnSave: CSSProperties
  btnCancel: CSSProperties
  notesList: CSSProperties
  noteItem: CSSProperties
  noteDateLabel: CSSProperties
  noteText: CSSProperties
  noteDelBtn: CSSProperties
}