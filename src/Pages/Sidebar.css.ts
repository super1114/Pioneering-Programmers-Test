
import { style } from '@vanilla-extract/css';
import { vars } from "../theme.css";
import { responsiveStyle } from '../style.css';

export const index = style({
  backgroundColor: vars.colors.topBarBg,
  color: vars.colors.topBarText,
  padding: 12,
  transition: 'width',
  transitionDuration: '.5s'
});

export const icon = style([
  {
    fontSize: '2rem'
  },
  responsiveStyle({
    mobile: {fontSize: '1rem'},
    tablet: {fontSize: '1.5rem'},
  })
]);

export const collapsed_y = style([
  {
    width: 240
  },
  responsiveStyle({
    mobile: {width: 60},
    tablet: {width: 150},
  })
]);

export const collapsed_n = style([
  {
    width: 36
  },
  responsiveStyle({
    mobile: {width: 16},
    tablet: {width: 24},
  })
]);

export const collapseButton = style({
  textAlign: 'right'
});

export const navButton = style({
  paddingTop: 16,
  display: 'flex'
});

export const navText = style([
  {
    marginLeft: 'auto'
  },
  responsiveStyle({
    mobile: {fontSize: '0.625rem'},
    tablet: {fontSize: '0.75rem'},
  })
]);

export const cursorPointer = style({
  cursor: 'pointer',
});