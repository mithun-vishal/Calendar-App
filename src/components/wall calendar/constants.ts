import type { Theme, WeatherEntry } from './types'

export const MONTHS: string[] = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

export const WEEKDAYS: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN']

export const MONTH_PHOTOS: string[] = [
  'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80',
  'https://images.unsplash.com/photo-1774637777045-e7390fc657e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&q=80',
  'https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=600&q=80',
  'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',
  'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=600&q=80',
]

export const THEMES: Theme[] = [
  { accent: '#5597ddff', name: 'Ocean'  },
  { accent: '#21a785ff', name: 'Forest' },
  { accent: '#c44949ff', name: 'Ruby'   },
  { accent: '#8e51b4ff', name: 'Violet' },
  { accent: '#c2862dff', name: 'Amber'  },
  { accent: '#3d9a84ff', name: 'Teal'   },
]

// key format: "month-day"  (no leading zeros)
export const HOLIDAYS: Record<string, string> = {
  '1-1':   "New Year's Day",
  '2-14':  "Valentine's Day",
  '3-4':  "Holi",
  '4-3':  "Good Friday",
  '5-1':   "Labour Day",
  '6-26':  "Muharram",
  '7-4':   "Independence Day",
  '8-14':  "Ganesh Chaturthi",
  '9-20':   "Eid Milad-un-Nabi",
  '10-20': "Dussehra",
  '11-11': "Diwali",
  '12-25': "Christmas Day",
  '12-31': "New Year's Eve",
}

export const WEATHER_BY_MONTH: WeatherEntry[] = [
  { icon: '❄️', label: 'Cold'   },
  { icon: '❄️', label: 'Cold'   },
  { icon: '🌱', label: 'Mild'   },
  { icon: '🌸', label: 'Spring' },
  { icon: '☀️', label: 'Warm'   },
  { icon: '☀️', label: 'Hot'    },
  { icon: '🌞', label: 'Peak'   },
  { icon: '🌞', label: 'Peak'   },
  { icon: '🍂', label: 'Cool'   },
  { icon: '🍂', label: 'Autumn' },
  { icon: '🌧', label: 'Rainy'  },
  { icon: '❄️', label: 'Winter' },
]