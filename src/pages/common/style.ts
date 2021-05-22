import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
  root: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  box: {
    textAlign: 'center'
  }
})

export const useBG1Styles = makeStyles({
  '@keyframes Background1': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
  root: {
    background: 'linear-gradient(to bottom right, #fec 0%, #fff 50%, #cef 100%)',
    backgroundSize: '150% 150%',
    animation: `$Background1 10s linear infinite`
  },
})
