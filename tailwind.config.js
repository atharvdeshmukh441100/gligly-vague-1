/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Important for manual dark mode toggle
  theme: {
    extend: {
      // You can extend your theme here if needed
      // For example, custom fonts, colors, spacing, etc.
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Base prose styles for light mode
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            // Add more base styles as needed

            // Dark mode prose styles
            // These are applied when .dark class is present on a parent element
            // You might need to adjust selectors if your dark mode class is different
            // or if you want to target .prose-invert directly within .dark
          },
        },
        invert: { // Defines styles for .prose-invert (used with .dark typically)
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            // Add more inverted styles as needed
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add other plugins here if you have them
  ],
}
