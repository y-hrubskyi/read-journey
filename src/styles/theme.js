export const theme = Object.freeze({
  colors: {
    pageBg: "#141414",
    primaryBg: "#1f1f1f",
    secondaryBg: "#262626",
    backdrop: "rgba(20, 20, 20, 0.6)",
    primaryText: "#f9f9f9",
    secondaryText: "#686868",
    accent: "#4f92f7",
    green: "#30b94d",
    red: (alpha = 1) => `rgba(232, 80, 80, ${alpha})`,
    btnBorder: "rgba(249, 249, 249, 0.2)",
  },
  radii: {
    img: "8px",
    field: "12px",
    modal: "12px",
    section: "12px",
    btn: "30px",
    wrapper: "30px",
  },
  transition: (prop = "") => `${prop} 250ms linear`,
  spacing: (value) => `${value * 4}px`,
});
