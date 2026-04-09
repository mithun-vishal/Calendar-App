import { useState, useEffect } from 'react'
import type { CalendarStyles } from './types'

interface Props {
  year: number
  month: number
  styles: CalendarStyles
}

export default function NoteLines({ year, month, styles }: Props) {
  const storageKey = `wcal_lines_${year}_${month}`

  const [lines, setLines] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) ?? '[]') }
    catch { return [] }
  })

  useEffect(() => {
    try { setLines(JSON.parse(localStorage.getItem(storageKey) ?? '[]')) }
    catch { setLines([]) }
  }, [storageKey])

  const handleChange = (i: number, val: string): void => {
    const next = [...lines]
    next[i] = val
    setLines(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}
  }

  return (
    <div style={styles.notesCol} className="wcal-notes-col">
      <div style={styles.notesTitle}>Notes</div>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} style={styles.noteLine}>
          <input
            type="text"
            value={lines[i] ?? ''}
            onChange={(e) => handleChange(i, e.target.value)}
            style={styles.noteLineInput}
            aria-label={`Note line ${i + 1}`}
          />
        </div>
      ))}
    </div>
  )
}