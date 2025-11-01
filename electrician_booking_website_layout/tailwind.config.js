export default  {
  content: [
    "./*.html",
  ],
  theme: {
    
    extend: {
      // 1. CUSTOM COLORS
      colors: {
        'primary-orange': '#F65616',    // Warm orange-red
        'secondary-orange': '#E25C26',  // Orange
        'tertiary-orange': '#CD3A00',   // Darker Orange (Hover)
        'deep-blue': '#0056B3',         // Deep blue for topics/icons
        'contact-blue': '#0056B3',      // Lighter blue for Contact banner
        'primary-blue': '#3b82f6',      // Tailwind default blue equivalent
        'light-orange' : '#FAAA8A',
      },
      maxHeight: {
        '120': '40rem',
        'hero': '80vh',
      },
      // 2. BOX SHADOWS
      boxShadow: {
        'custom-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },

      // 3. KEYFRAMES and ANIMATIONS (for service-marquee)
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 5000ms linear infinite',
      },
    },
  },
  plugins: [],
}