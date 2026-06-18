export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: { 50:'#f0fdf4', 100:'#dcfce7', 500:'#22c55e', 600:'#16a34a', 700:'#15803d', 800:'#166534', 900:'#14532d' },
        earth:  { 50:'#fefce8', 100:'#fef9c3', 500:'#eab308', 600:'#ca8a04', 700:'#a16207', 800:'#854d0e', 900:'#713f12' },
        sky:    { 50:'#eff6ff', 500:'#3b82f6', 600:'#2563eb', 700:'#1d4ed8', 800:'#1e40af' },
        rose:   { 50:'#fff1f2', 500:'#f43f5e', 600:'#e11d48', 700:'#be123c', 800:'#9f1239' },
      }
    }
  },
  plugins: []
}
