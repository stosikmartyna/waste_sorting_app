import { css } from 'emotion';

export const container = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    '& h1': {
        fontSize: '2.5rem',
    }
})

export const binsContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '4rem',
})

export const bin = css({
    textAlign: 'center',
    
    '& h3': {
        fontWeight: '100',
        letterSpacing: '.1rem',
        textTransform: 'uppercase'
    },

    '& img': {
        width: '200px',
    },

    '& img:hover': {
        transform: 'scale(1.1)',
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