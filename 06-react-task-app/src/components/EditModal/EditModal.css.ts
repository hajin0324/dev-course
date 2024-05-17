import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 10000
});

export const modalWindow = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '800px',
  height: 'max-content',
  maxHeight: '500px',
  overflowY: 'auto',
  backgroundColor: vars.color.mainDarker,
  opacity: 0.95,
  padding: 20,
  boxShadow: vars.shadow.basic,
  color: vars.color.brightText
});

export const header = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '40px'
});

export const closeBtn = style({
  fontSize: vars.fontSizing.T2,
  cursor: 'pointer',
  marginTop: "-20px",
  ":hover": {
    opacity: 0.8
  }
});

export const title = style({
  fontSize: vars.fontSizing.T2,
  color: vars.color.brightText,
  marginRight: 'auto',
  marginBottom: vars.spacing.medium
});

export const buttons = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 50
});

export const updateBtn = style({
  border: 'none',
  fontSize: vars.fontSizing.T4,
  color: vars.color.brightText,
  padding: vars.spacing.big2,
  marginRight: vars.spacing.big1,
  backgroundColor: vars.color.updateButton,
  cursor: 'pointer',
  ":hover": {
    opacity: 0.8
  }
});

export const deleteBtn = style({
  border: 'none',
  fontSize: vars.fontSizing.T4,
  color: vars.color.brightText,
  padding: vars.spacing.big2,
  marginRight: vars.spacing.big1,
  backgroundColor: vars.color.deleteButton,
  cursor: 'pointer',
  ":hover": {
    opacity: 0.8
  }
});

export const input = style({
  width: '100%',
  minHeight: '30px',
  border: 'none',
  marginBottom: vars.spacing.big2,
  padding: vars.spacing.medium,
  fontSize: vars.fontSizing.T4,
  boxShadow: vars.shadow.basic
});