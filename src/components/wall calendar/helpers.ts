import type { CalDate, GridCell } from './types'
import { MONTHS, HOLIDAYS } from './constants'

export const toTs = (y: number, m: number, d: number): number =>
  new Date(y, m, d).getTime()

export const toDk = (y: number, m: number, d: number): string =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

export function buildMonthGrid(year: number, month: number): GridCell[] {
  const firstDow  = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevDays    = new Date(year, month, 0).getDate()
  const cells: GridCell[] = []

  for (let i = 0; i < firstDow; i++)
    cells.push({ day: prevDays - firstDow + 1 + i, current: false })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, current: true })
  const trailing = (7 - (cells.length % 7)) % 7
  for (let d = 1; d <= trailing; d++)
    cells.push({ day: d, current: false })

  return cells
}

export function rangeDescription(
  rs: CalDate | null,
  re: CalDate | null
): string | null {
  if (!rs) return null
  if (!re || toDk(rs.y, rs.m, rs.d) === toDk(re.y, re.m, re.d)) {
    const hKey = `${rs.m + 1}-${rs.d}`
    const hol = HOLIDAYS[hKey]
    const base = `${MONTHS[rs.m].slice(0, 3)} ${rs.d}`
    return hol ? `${base} – ${hol}` : base
  }
  let a = rs, b = re
  if (toTs(a.y, a.m, a.d) > toTs(b.y, b.m, b.d)) [a, b] = [b, a]
  const days =
    Math.round((toTs(b.y, b.m, b.d) - toTs(a.y, a.m, a.d)) / 86_400_000) + 1
  return `${MONTHS[a.m].slice(0, 3)} ${a.d} – ${MONTHS[b.m].slice(0, 3)} ${b.d} (${days}d)`
}

export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${alpha})`
}