
export const responsiveStyle = ({ mobile, tablet } : any) => ({
    '@media': {
        'screen and (min-width: 768px) and (max-width: 1023px)': tablet,
        'screen and (max-width: 767px)': mobile,
    }
});