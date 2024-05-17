import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    main: '#ffa726',
    mainDarker: 'rgb(34, 58, 136)',
    mainFaded: 'rgb(152, 161, 200)',//'rgb(152, 161, 192)',
    mainFadedBright: 'rgb(120, 140, 180)',
    sub: 'rgb(239, 239, 239)',
    list: 'rgb(208, 211, 218)',
    task: 'rgb(255, 255, 255)',
    taskHover: 'rgb(245, 245, 245)',
    brightText: 'rgb(255, 255, 255)',
    darkText: 'rgb(24, 42, 77)',
    secondaryDarkText: 'rgb(94, 108, 132)',
    secondaryDarkTextHover: 'rgb(192, 200, 210)',
    selectedTab: 'rgb(255, 255, 255)',
    updateButton: 'rgb(243, 173, 12)',
    deleteButton: 'rgb(220, 57, 40)'
  },
  fontSizing: {
    T1: '32px',
    T2: '24px',
    T3: '18px',
    T4: '14px',
    P1: '12px',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    big1: '20px',
    big2: '15px',
    listSpacing: '40px',
  },
  font: {
    body: 'arial',
  },
  shadow: {
    basic: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
  },
  minWidth: {
    list: '250px',
  },
});

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "max-content",
  width: "100vw",
  backgroundColor: vars.color.sub
});

export const board = style({
  display: "flex",
  flexDirection: "row",
  height: "100$%"
});

export const buttons = style({
  marginTop: "auto",
  paddingLeft: vars.spacing.big2
});

export const deleteBoardBtn = style({
  border: 'none', 
  width: 'max-content',
  marginTop: 'auto',
  marginLeft: vars.spacing.big1,
  marginBottom: 30,
  fontSize: vars.fontSizing.T4,
  color: vars.color.brightText,
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainDarker,
  cursor: 'pointer',
  minWidth: 150,
  ":hover": {
    opacity: 0.8
  }
});

export const loggerBtn = style({
  border: 'none',
  width: 'max-content',
  marginTop: 'auto',
  marginLeft: '15px',
  marginRight: '30px',
  marginBottom: '30px',
  fontSize: vars.fontSizing.T4,
  color: vars.color.brightText,
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainDarker,
  cursor: 'pointer',
  minWidth: 150,
  ":hover": {
    opacity: 0.8
  }
});