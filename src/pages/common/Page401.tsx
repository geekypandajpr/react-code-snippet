import React from 'react'
import { useStyles, useBG1Styles } from './style'

const Page404 = () => {
  const classes = useStyles()
  const classesBG1 = useBG1Styles()

  return (
    <div className={classes.root + ' ' + classesBG1.root}>
      <div className={classes.box}>
        <h1 style={{color:'red'}}>401: Unauthorized</h1>
        You need proper permission to open this page
      </div>
    </div>
  )
}

export default Page404
