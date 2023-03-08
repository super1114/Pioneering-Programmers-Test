
import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../style.css';

export const modal = style({
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    zIndex: 9999
})

export const innerModal = style({
    maxWidth: 640,
    margin: "auto 10px",
    background: "white"
})

export const modalHeader = style([
    {
        padding: 20,
        fontSize: '2rem',
        backgroundColor: "lightgrey",
    },
    responsiveStyle({
        mobile: {
            padding: 10,
            fontSize: '1rem'
        },
        tablet: {
            padding: 15,
            fontSize: '1.5rem'
        },
    })
])

export const modalContent = style([
    {
        padding: 20,
        fontSize: '1.5rem'
    },
    responsiveStyle({
        mobile: {
            padding: 10,
            fontSize: '1rem'
        },
        tablet: {
            padding: 15,
            fontSize: '1.25rem'
        },
    })
])

export const modalFooter = style([
    {
        display: "flex",
        padding: 20
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