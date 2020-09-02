import { css } from 'emotion';

export const mediaQueries= {
    M: `@media (max-width: 600px)`
}

export const container = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    '& h1': {
        fontFamily: 'Oswald-Regular',
        fontSize: '5rem',
        margin: 0,
        marginTop: '.75rem',
    },

    '& h2': {
        fontFamily: 'Oswald-Regular',
        fontSize: '1.75rem',
        letterSpacing: '.1rem',
        textAlign: 'center',
    }
})

export const wasteContainer = css({
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.869)',
    borderRadius: '5px',
    boxShadow: '-1px 0px 17px -5px rgba(224,224,224,1)',
    display: 'flex', 
    justifyContent: 'center',
    padding: '1rem 2rem',
    width: '40vw',

    '& img': {
        filter: 'drop-shadow(0 0 0.55rem #f0f0f0)',
        marginRight: '2rem',
        width: '80px'
    }
})

export const binsContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2rem'
})

export const bin = (isClickable) => css({
    filter: 'drop-shadow(0 0 0.35rem #b8b8b8)',
    textAlign: 'center',
    width: '230px',
    
    '& h3': {
        fontWeight: '100',
        letterSpacing: '.1rem',
        textTransform: 'uppercase'
    },

    '& img': {
        width: '200px',
    },

    '& img:hover': {
        cursor: isClickable && 'pointer',
        transform: isClickable && 'scale(1.1)',
    },
})

export const button = css({
    background: '#4caf50',
    border: 'none',
    borderRadius: '3px',
    boxShadow: '0px 0px 5px 0px rgba(207,207,207,1)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    letterSpacing: '.1rem',
    outline: 'none',
    padding: '.5rem 1rem',
    textTransform: 'uppercase',
    
    '&:hover': {
        background: '#3d9640',
    }
})

export const answerLabel = (isCorrect) => css({
    alignItems: 'center',
    backgroundColor: isCorrect ? '#CCFFA9' : '#FF9191',
    borderRadius: '5px',
    boxShadow: '-1px 0px 17px -5px rgba(224,224,224,1)',
    display: 'flex',
    justifyContent: isCorrect ? 'space-between' : 'start',
    padding: '1rem 2rem',
    width: '40vw',
    [mediaQueries.M]: {
        flexDirection: 'column',
    }, 

    '& img': {
        width: '80px'
    },

    '& button': {
        backgroundColor: isCorrect ? '#a5d266' : '#e24c4b',
        border: 'none',
        borderRadius: '3px',
        boxShadow: '0px 0px 5px 0px rgba(207,207,207,1)',
        cursor: 'pointer',
        outline: 'none',
        padding: '.3rem .7rem',
        textTransform: 'uppercase',

        '&:hover': {
            backgroundColor: '#8ec73e',
        }
    }
})

export const randomWasteWrapper = (isCorrect) => css({
    marginRight: !isCorrect ? '64px' : 'auto',
    textAlign: 'center',
    width: '100%',
    [mediaQueries.M]: {
        marginRight: 'auto',
    }   
});