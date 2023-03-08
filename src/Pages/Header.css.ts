
import { style } from '@vanilla-extract/css';
import { vars } from "../theme.css";
import { responsiveStyle } from '../style.css';

export const index = style([
  {
    backgroundColor: vars.colors.topBarBg,
    color: vars.colors.topBarText,
    fontSize: '3rem',
    padding: 4,
  },
  responsiveStyle({
    mobile: {fontSize: '1rem'},
    tablet: {fontSize: '2rem'},
  })
]);