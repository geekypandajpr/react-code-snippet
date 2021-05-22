import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainform: {
    display: 'grid',
    textAlign: 'center',
    alignItems: 'center',
    padding: '30px 50px',
    borderRadius: 8,
    border: '1px solid #ccc',
    boxShadow: '0 0 30px 1px rgba(0,0,0, 0.15)',
    backgroundColor: 'rgba(255,255,255, 0.6)',
  },
  h1: {
    fontFamily: 'Bebas Neue',
    margin: '0 0 20px 0'
  },
  input: {
    backgroundColor: 'rgba(255,230,200, 0.1)',
    transitionDuration: '0.25s',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.5)'
    }
  },
  button: {
    margin: '10px 0',
    backgroundColor: 'rgba(255,200,100, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(255,220,150, 0.5)'
    }
  },
})

export default useStyles
