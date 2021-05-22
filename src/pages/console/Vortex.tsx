import React, { useState } from 'react'
import { Switch, Typography } from '@material-ui/core'

const Vortex = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <h2 style={{ margin: 0 }}>Vortex 2.0</h2>

      <div style={{ display: 'flex' }}>
        <Typography>Start Vortex </Typography>
        <Switch
          checked={checked}
          onChange={(_e, v) => setChecked(v)}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    </div>
  )
}

export default Vortex
