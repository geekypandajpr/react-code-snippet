import React from 'react'
import { useBG1Styles, useStyles } from './style'

const Page404 = () => {
  const classes = useStyles()
  const classesBG1 = useBG1Styles()

  return (
    <div className={classes.root + ' ' + classesBG1.root}>
      <div className={classes.box}>
        <h1>404: Not Found</h1>
      </div>
    </div>
  )
}

export default Page404
