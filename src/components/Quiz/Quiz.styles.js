import { css } from 'emotion';

export const container = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    '& h1': {
        fontSize: '2.5rem',
    }
})

export const wasteContainer = css({
    alignItems: 'center',
    boxShadow: '-1px 0px 17px -5px rgba(224,224,224,1)',
    display: 'flex', 
    justifyContent: 'center',
    padding: '1rem 2rem',
    width: '40vw',

    '& img': {
        marginRight: '2rem',
        width: '80px'
    }
})

export const binsContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '4rem',
})

export const bin = (isClickable) => css({
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
    background: '#960f19',
    border: 'none',
    borderRadius: '3px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    letterSpacing: '.1rem',
    outline: 'none',
    padding: '.5rem 1rem',
    textTransform: 'uppercase',
    
    '&:hover': {
        background: '#731422',
    }
})

export const answerLabel = (isCorrect) => css({
    alignItems: 'center',
    backgroundColor: isCorrect ? '#CCFFA9' : '#FF9191',
    borderRadius: '3px',
    boxShadow: '-1px 0px 17px -5px rgba(224,224,224,1)',
    display: 'flex',
    justifyContent: isCorrect ? 'space-between' : 'start',
    padding: '1rem 2rem',
    width: '40vw',

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
});