import React, { useState } from 'react'
import { Switch } from '@material-ui/core'
import ReactSpeedometer from 'react-d3-speedometer'
import { useSpeedometerStyles } from './style'


const Fan = () => {
  const classes = useSpeedometerStyles()
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <h2 style={{margin:0}}>Fan Control</h2>

      <div>
        <Switch
          checked={checked}
          onChange={(_e, v) => setChecked(v)}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>

      <div className={classes.root}>
        <ReactSpeedometer
          maxValue={220}
          value={120}
          needleColor="blue"
          startColor="green"
          segments={10}
          endColor="red"
        />
      </div>

    </div>
  )
}

export default Fan
