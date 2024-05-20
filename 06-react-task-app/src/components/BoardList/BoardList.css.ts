import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: 15,
  minHeight: 'max-contrent',
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainDarker,
});

export const title = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  margin: vars.spacing.big1,
  paddingRight: vars.spacing.big1
});

export const addBtn = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  cursor: 'pointer',
  marginLeft: vars.spacing.medium,
  marginRight: vars.spacing.medium,
  ':hover': {
    opacity: 0.6
  }
});

export const boardItem = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T4,
  backgroundColor: vars.color.mainFaded,
  padding: vars.spacing.medium,
  cursor: 'pointer',
  marginRight: vars.spacing.big1,
  ":hover": {
    opacity: 0.8,
    transform: 'scale(1.03)'
  }
});

export const boardItemActive = style({
  fontSize: vars.fontSizing.T4,
  backgroundColor: vars.color.selectedTab,
  padding: vars.spacing.medium,
  cursor: 'pointer',
  marginRight: vars.spacing.big1
});

export const addSection = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto'
});

export const smallTitle = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3
});