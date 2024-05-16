import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const taskBtn = style({
  display: 'flex',
  alignItems: 'center',
  height: 'max-content',
  marginTop: vars.spacing.small,
  fontSize: vars.fontSizing.T3,
  padding: vars.spacing.medium,
  cursor: 'pointer',
  ":hover": {
    backgroundColor: vars.color.secondaryDarkTextHover
  }
})

export const listBtn = style({
  display: 'flex',
  alignItems: 'center',
  height: 'max-content',
  minWidth: vars.minWidth.list,
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
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