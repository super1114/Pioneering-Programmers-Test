
import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../style.css';

export const index = style([
    {
        padding: 20,
        display: 'flex',
        gap: 20
    },
    responsiveStyle({
        mobile: {
            padding: 10,
            flexDirection: 'column',
            gap: 10
        },
        tablet: {},
    })
]);

export const modalOkButton = style({
    marginLeft: "auto",
    backgroundColor: "#0033FF",
    color: "white"
})

export const modalCancelButton = style({
    marginLeft: "auto",
    backgroundColor: "transparent",
    color: "black"
})

export const modalRemoveButton = style({
    marginLeft: 20,
    backgroundColor: "#ffa500",
    color: "black"
})

export const modalDeleteButton = style({
    marginLeft: 20,
    backgroundColor: "#cc0000",
    color: "white"
})