# Wall Calendar 📅

An interactive, responsive, and highly customizable wall calendar built with React and TypeScript. Designed to be both aesthetically pleasing and functional, just like a real physical wall calendar but with digital conveniences!

## ✨ Features

- **Interactive UI**: Elegant, clean design resembling a physical spiral wall calendar.
- **Monthly Hero Photos**: A beautiful header photo specific to each month, with the ability to flip through alternative images directly.
- **Light / Dark Mode**: Fully supported dark mode toggle to ease your eyes.
- **Customizable Themes**: Choose from multiple accent color themes (Ocean, Forest, Ruby, Violet, Amber, Teal) to fit your mood.
- **Range & Day Selection**: Click to select a single day, or click two days to define a date range.
- **Note Taking feature**: Add dynamic pop-up notes to specific days or date ranges. Notes are saved automatically to your browser's local storage.
- **General Notes panel**: A lined persistent notepad per month to scribble down quick thoughts.
- **Holidays**: Built-in support to display governmental holidays with color indicators. Clicking a holiday will reveal its name directly.
- **Dynamic Navigation**: Jump seamlessly between any month or year via seamless dropdown selectors.
- **Adaptive Layout**: Mobile-first mentality; the calendar beautifully adapts its layout entirely based on your device screen size.

## 🛠️ Tech Stack

- **React** (v18+)
- **TypeScript**
- **Vite** (Build tool)
- **CSS** (Vanilla CSS styled responsively with dynamic inline JS logic)

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd wall-calendar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will typically be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

You can then preview the production build using:
```bash
npm run preview
```

## 📂 Project Structure

- `src/components/wall calendar/` - The core calendar codebase.
  - `index.tsx` - The main container component pulling together navigation, themes, and persistence.
  - `calendarGrid.tsx` - The actual numerical grid containing the days.
  - `dayCell.tsx` - The individual logic for each day including holiday and note indicators.
  - `heroPhoto.tsx` - The dynamic monthly header layout.
  - `constants.ts` - Holiday definitions, theme palettes, and configuration.
  - `styles.ts` & `calendar-mobile.css` - UI layout schemas ensuring 100% responsiveness.

## 📝 License

This project is licensed under the MIT License.
