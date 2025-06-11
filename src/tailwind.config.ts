/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Covers all component files
  ],
  theme: {
    extend: {}, // Optional: Add custom styles here
  },
  plugins: [], // Optional: Add plugins like @tailwindcss/forms
}