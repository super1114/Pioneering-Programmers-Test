
import { style } from '@vanilla-extract/css';
import { vars } from "../../theme.css";
import { responsiveStyle } from '../../style.css';

export const index = style([
    {
        padding: 20,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20
    },
    responsiveStyle({
        mobile: {
            padding: 10,
            gap: 10
        },
        tablet: {
            padding: 15,
            gap: 15
        },
    })
]);

export const left = style([
    {
        backgroundColor: vars.colors.leftBg,
        color: vars.colors.leftText,
        padding: 20,
    },
    responsiveStyle({
        mobile: {
            padding: 10,
        },
        tablet: {
            padding: 15,
        },
    })
])

export const right = style({
    backgroundColor: vars.colors.rightBg,
    color: vars.colors.rightText,
    padding: 20,
})

export const textArea = style({
    marginTop: 10,
    marginBottom: 10,
    width: "100%"
})

export const buttonGroup = style({
    marginTop: 10,
    marginBottom: 10,
    display: 'grid',
    gap: 10
})

export const history = style([
    {
        paddingBottom: 10
    },
    responsiveStyle({
      mobile: {fontSize: '0.75rem'},
      tablet: {fontSize: '0.875rem'},
    })
  ]);