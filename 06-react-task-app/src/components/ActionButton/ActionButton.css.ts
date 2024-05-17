import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const taskBtn = style({
  display: 'flex',
  alignItems: 'center',
  height: 'max-content',
  marginTop: vars.spacing.small,
  fontSize: vars.fontSizing.T4,
  padding: vars.spacing.medium,
  cursor: 'pointer',
  boxSizing: 'border-box',
  ":hover": {
    outline: '1.5px solid',
    outlineColor: vars.color.mainDarker
  }
})

export const listBtn = style({
  display: 'flex',
  alignItems: 'center',
  height: 'max-content',
  minWidth: vars.minWidth.list,
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T4,
  backgroundColor: vars.color.mainFaded,
  paddingTop: vars.spacing.medium,
  paddingBottom: vars.spacing.medium,
  paddingRight: vars.spacing.big2,
  paddingLeft: vars.spacing.big2,
  cursor: 'pointer',
  ":hover": {
    backgroundColor: vars.color.mainDarker
  }
})