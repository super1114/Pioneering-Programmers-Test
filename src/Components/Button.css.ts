
import { style } from '@vanilla-extract/css';
import { vars } from "../theme.css";
import { responsiveStyle } from '../style.css';

export const index = style([
  {
    padding: "10px 20px",
    color: vars.colors.buttonText,
    backgroundColor: vars.colors.buttonBg,
    cursor: "pointer",
    width: "fit-content",
    height: "fit-content",
  },
  responsiveStyle({
    mobile: {padding: "4px 8px", fontSize: "0.75rem"},
    tablet: {fontSize: "0.875rem"},
  })
]);

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed"
});