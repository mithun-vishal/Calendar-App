import type { NoteWithIndex, CalendarStyles } from './types'

interface Props {
  notes: NoteWithIndex[]
  accentColor: string
  onDelete: (idx: number) => void
  styles: CalendarStyles
}

export default function NotesList({ notes, accentColor, onDelete, styles }: Props) {
  if (!notes.length) return null

  return (
    <div style={styles.notesList}>
      {notes.map((n) => (
        <div key={n.origIdx} style={styles.noteItem}>
          <span style={{ ...styles.noteDateLabel, color: accentColor }}>
            {n.label}
          </span>
          <span style={styles.noteText}>{n.text}</span>
          <button
            onClick={() => onDelete(n.origIdx)}
            style={styles.noteDelBtn}
            aria-label="Delete note"
          >×</button>
        </div>
      ))}
    </div>
  )
}