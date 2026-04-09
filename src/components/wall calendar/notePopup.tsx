import { useState } from 'react'
import type { CalendarStyles } from './types'

interface Props {
  label: string | null
  accent: string
  onSave: (text: string) => void
  onCancel: () => void
  styles: CalendarStyles
}

export default function NotePopup({ label, accent, onSave, onCancel, styles }: Props) {
  const [text, setText] = useState<string>('')

  return (
    <div style={styles.popup}>
      <div style={styles.popupLabel}>Note for {label}</div>
      <textarea
        autoFocus
        rows={2}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note…"
        style={styles.popupInput}
      />
      <div style={styles.popupRow}>
        <button onClick={onCancel} style={styles.btnCancel}>Cancel</button>
        <button
          onClick={() => text.trim() && onSave(text.trim())}
          style={{ ...styles.btnSave, background: accent }}
        >
          Save
        </button>
      </div>
    </div>
  )
}