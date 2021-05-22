import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import { useSpeedometerStyles } from './style'


const SerumFlow = () => {
  const classes = useSpeedometerStyles()

  return (
    <div>
      <h2 style={{margin:0}}>Serum Flow And Volume</h2>
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

      <h2>Vccume  Error</h2>
      Vaccume Error is Wrong

    </div>
  )
}

export default SerumFlow
