import type { CSSProperties } from 'react'
import type { CalendarStyles } from './types'

export function makeStyles(accent: string, dark: boolean): CalendarStyles {
  const text     = dark ? '#e8e9ea' : '#1a1b1e'
  const text2    = dark ? '#9a9da5' : '#6b6e78'
  const text3    = dark ? '#6b6e78' : '#adb0b8'
  const surface  = dark ? '#1e2025' : '#ffffff'
  const surface2 = dark ? '#2a2c31' : '#f7f8fa'
  const border   = dark ? '#383a40' : '#e2e4e8'
  const binding  = dark ? '#2d2f35' : '#e4e6ea'
  const ring     = dark ? '#555'    : '#bbb'
  const noteLine = dark ? '#333'    : '#ddd'

  return {
    srOnly: {
      position: 'absolute', width: 1, height: 1, padding: 0,
      margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)',
      whiteSpace: 'nowrap', border: 0,
    },
    root: {
      fontFamily: "'Barlow', sans-serif",
      maxWidth: 440,
      width: '100%',
      margin: '0 auto',
      padding: '12px 0 24px',
      transition: 'color 0.25s',
      boxSizing: 'border-box',
    },
    paper: {
      background: surface,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: dark
        ? '0 8px 40px rgba(0,0,0,0.55)'
        : '0 8px 40px rgba(0,0,0,0.16)',
      transition: 'background 0.25s, box-shadow 0.25s',
    },
    topBar: {
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 14px 5px',
      background: binding,
      transition: 'background 0.25s',
    },
    rings: { display: 'flex', gap: 9, alignItems: 'center' },
    ring: {
      width: 15, height: 15, borderRadius: '50%',
      border: `2.5px solid ${ring}`,
      background: surface,
      transition: 'border-color 0.25s, background 0.25s',
    },
    controls: { display: 'flex', gap: 8, alignItems: 'center' },
    iconBtn: (active: boolean): CSSProperties => ({
      background: active ? accent : 'none',
      border: `1px solid ${active ? accent : border}`,
      borderRadius: 20, padding: '3px 9px',
      cursor: 'pointer', fontSize: 11,
      fontFamily: "'Barlow', sans-serif",
      color: active ? '#fff' : text2,
      display: 'flex', alignItems: 'center', gap: 4,
      transition: 'background 0.15s, color 0.15s, border-color 0.25s',
    }),
    darkToggleTrack: (isDark: boolean): CSSProperties => ({
      display: 'inline-flex',
      alignItems: 'center',
      width: 52,
      height: 26,
      borderRadius: 13,
      cursor: 'pointer',
      padding: '0 3px',
      background: isDark
        ? 'linear-gradient(135deg, #1a1f3c 0%, #2d3561 100%)'
        : 'linear-gradient(135deg, #f9c561 0%, #f4a429 100%)',
      boxShadow: isDark
        ? 'inset 0 1px 4px rgba(0,0,0,0.6), 0 0 0 1px #383a60'
        : 'inset 0 1px 4px rgba(0,0,0,0.18), 0 0 0 1px rgba(200,140,0,0.55)',
      transition: 'background 0.4s ease, box-shadow 0.4s ease',
      flexShrink: 0,
      position: 'relative',
      border: 'none',
    }),
    darkToggleThumb: (isDark: boolean): CSSProperties => ({
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: isDark ? '#c8cfe8' : '#fff',
      boxShadow: isDark
        ? '0 1px 4px rgba(0,0,0,0.5)'
        : '0 1px 6px rgba(0,0,0,0.25)',
      transform: isDark ? 'translateX(26px)' : 'translateX(0px)',
      transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease, box-shadow 0.35s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      lineHeight: 1,
      userSelect: 'none',
      pointerEvents: 'none',
    }),
    photoPanel: {
      position: 'relative', width: '100%',
      height: 230, overflow: 'hidden',
    },
    heroImg: {
      width: '100%', height: '100%',
      objectFit: 'cover', display: 'block',
      transition: 'opacity 0.4s, filter 0.4s',
      filter: dark ? 'brightness(0.75) saturate(0.85)' : 'none',
    },
    pnavBtn: {
      position: 'absolute', top: '50%',
      transform: 'translateY(-50%)',
      background: dark ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.5)',
      border: 'none', borderRadius: '50%',
      width: 28, height: 28, cursor: 'pointer',
      fontSize: 16, color: dark ? '#eee' : '#222',
      zIndex: 5, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    },
    diagonal: {
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 72, zIndex: 2, pointerEvents: 'none',
    },
    monthBadge: {
      position: 'absolute', bottom: 10, right: 16,
      zIndex: 3, textAlign: 'right', lineHeight: 1,
    },
    yearLabel: {
      display: 'block', fontSize: 12, fontWeight: 300,
      color: 'rgba(255,255,255,0.82)', letterSpacing: 2, marginBottom: 2,
    },
    monthLabel: {
      display: 'block',
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 32, fontWeight: 700, color: '#fff',
      letterSpacing: 1, textTransform: 'uppercase',
    },
    toolbar: {
      display: 'flex', alignItems: 'center',
      gap: 6, padding: '7px 14px 6px',
      borderBottom: `1px solid ${border}`,
      flexWrap: 'wrap',
      transition: 'border-color 0.25s',
    },
    themeLabel: {
      fontSize: 9, letterSpacing: 0.6,
      color: text3, textTransform: 'uppercase', marginRight: 2,
    },
    themeDot: (active: boolean): CSSProperties => ({
      width: 13, height: 13, borderRadius: '50%',
      cursor: 'pointer', border: 'none',
      outline: active ? `2px solid ${dark ? '#fff' : '#333'}` : 'none',
      outlineOffset: 2,
      transform: active ? 'scale(1.2)' : 'scale(1)',
      transition: 'transform 0.15s',
    }),
    sep: {
      width: 1, height: 16,
      background: border, margin: '0 4px',
    },
    bottom: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
    },
    notesCol: {
      padding: '12px 12px 14px 14px',
      borderRight: `1px solid ${border}`,
      display: 'flex', flexDirection: 'column',
      transition: 'border-color 0.25s',
    },
    notesTitle: {
      fontSize: 10, fontWeight: 600, letterSpacing: 0.8,
      color: text3, textTransform: 'uppercase', marginBottom: 10,
    },
    noteLine: {
      borderBottom: `1px solid ${noteLine}`,
      height: 22, position: 'relative',
      transition: 'border-color 0.25s',
    },
    noteLineInput: {
      position: 'absolute', inset: 0, border: 'none',
      outline: 'none', background: 'transparent',
      fontFamily: "'Barlow', sans-serif",
      fontSize: 11, color: text,
      padding: '0 2px', width: '100%', height: '100%',
    },
    gridCol: { padding: '10px 14px 12px 12px' },
    monthNav: {
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 6,
    },
    navBtn: {
      background: 'none', border: 'none',
      cursor: 'pointer', fontSize: 17,
      color: text3, padding: '0 3px', lineHeight: 1,
    },
    navLabel: {
      fontSize: 11, fontWeight: 600,
      letterSpacing: 0.5, color: text2,
    },
    wdRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 2,
    },
    wd: (isWeekend: boolean): CSSProperties => ({
      textAlign: 'center', fontSize: 9, fontWeight: 600,
      letterSpacing: 0.3, padding: '2px 0',
      textTransform: 'uppercase',
      color: isWeekend ? accent : text3,
    }),
    daysGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)', rowGap: 1,
    },
    day: {
      textAlign: 'center', fontSize: 11.5, padding: '3px 1px',
      cursor: 'pointer', borderRadius: '50%', lineHeight: 1.6,
      userSelect: 'none', transition: 'background 0.1s',
      color: text, position: 'relative',
    },
    dayOther: {
      textAlign: 'center', fontSize: 11.5,
      padding: '3px 1px', color: text3, lineHeight: 1.6,
    },
    noteDot: {
      width: 3, height: 3, borderRadius: '50%',
      position: 'absolute', bottom: 1,
      left: '50%', transform: 'translateX(-50%)', display: 'block',
    },
    rangeLbl: {
      fontSize: 10, color: text3,
      marginTop: 5, minHeight: 14, textAlign: 'center',
    },
    miniStats: {
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 4, margin: '8px 0 4px',
    },
    stat: {
      background: surface2, borderRadius: 5,
      padding: '5px 7px', transition: 'background 0.25s',
    },
    statVal: {
      fontSize: 15, fontWeight: 700, lineHeight: 1,
    },
    statLbl: {
      fontSize: 9, color: text3,
      marginTop: 1, textTransform: 'uppercase', letterSpacing: 0.4,
    },
    popup: {
      background: surface, border: `1px solid ${border}`,
      borderRadius: 7, padding: '10px 12px',
      marginTop: 8, display: 'flex',
      flexDirection: 'column', gap: 6,
      transition: 'background 0.25s, border-color 0.25s',
    },
    popupLabel: {
      fontSize: 10, color: text3,
      fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5,
    },
    popupInput: {
      border: 'none', borderBottom: `1px solid ${border}`,
      fontFamily: "'Barlow', sans-serif",
      fontSize: 11.5, color: text,
      padding: '3px 0', outline: 'none',
      background: 'transparent', width: '100%', resize: 'none',
      transition: 'border-color 0.25s',
    },
    popupRow: {
      display: 'flex', justifyContent: 'flex-end',
      gap: 6, marginTop: 4,
    },
    btnSave: {
      fontFamily: "'Barlow', sans-serif",
      fontSize: 11, fontWeight: 600,
      borderRadius: 4, padding: '4px 11px',
      cursor: 'pointer', border: 'none',
      color: '#fff', background: accent,
    },
    btnCancel: {
      fontFamily: "'Barlow', sans-serif",
      fontSize: 11, fontWeight: 600,
      borderRadius: 4, padding: '4px 11px',
      cursor: 'pointer', border: 'none',
      background: surface2, color: text2,
    },
    notesList: {
      marginTop: 4, display: 'flex',
      flexDirection: 'column',
      maxHeight: 80, overflowY: 'auto',
    },
    noteItem: {
      display: 'flex', alignItems: 'flex-start',
      gap: 5, fontSize: 10, color: text2,
      padding: '3px 0', borderBottom: `0.5px dashed ${border}`,
    },
    noteDateLabel: {
      fontWeight: 600, minWidth: 50, fontSize: 9.5, paddingTop: 1,
    },
    noteText: { flex: 1, lineHeight: 1.3 },
    noteDelBtn: {
      background: 'none', border: 'none', color: text3,
      cursor: 'pointer', fontSize: 13, padding: 0, lineHeight: 1,
    },
  }
}