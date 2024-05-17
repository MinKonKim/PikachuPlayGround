/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100px)" },
        },
      },
      // 애니메이션 이름과 기간을 설정
      animation: {
        jump: "jump 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
