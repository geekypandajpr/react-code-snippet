import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/session/action'
import { Button, Fade, FormControl, TextField } from '@material-ui/core'
import useStyles from './style'
import { useBG1Styles } from '../common/style'

const Login = () => {
  const classes = useStyles()
  const classesBG1 = useBG1Styles()

  const dispatch = useDispatch()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div className={classes.root + ' ' + classesBG1.root}>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        dispatch(login({username, password}))
      }}
    >
      <Fade in timeout={{enter:1000, exit:5000}}>
      <main className={classes.mainform}>
        <h1 className={classes.h1}>
          Syndeo
        </h1>
        <FormControl>
          <TextField
            label='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            variant='outlined' margin='dense'
            InputProps={{classes: {root: classes.input}}}
          />
        </FormControl>
        <FormControl>
          <TextField
            label='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            variant='outlined' margin='dense'
            InputProps={{classes: {root: classes.input}}}
          />
        </FormControl>
        <div>username = testadmin</div>
        <div>password = test</div>
        <Button
          variant='outlined'
          type='submit'
          className={classes.button}
        >
          Login
        </Button>
      </main>
      </Fade>
    </form>
    </div>
  )
}

export default Login
