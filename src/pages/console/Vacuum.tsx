import React, { useEffect, useState } from 'react'
import {
  Switch,
  Button,
  Slider
} from '@material-ui/core'
import CircularProgressWithLabel from '../common/CircularProgressWithLabel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/common/reducers'
import { selectVacuum } from '../../redux/device/action'

const Vacuum = () => {
  const dispatch = useDispatch()
  const vacuumState = useSelector((state: RootState) => state.device.vacuum)

  const [dis, setdis] = useState(false)
  const [dis1, setdis1] = useState(false)
  const [dis2, setdis2] = useState(false)

  const progress = 80

  useEffect(() => {
    dispatch(selectVacuum())
  }, [dispatch])

  if (!vacuumState) return (
    <div>
      loading
    </div>
  )

  const { state, setting, detectedlevel } = vacuumState

  return (
    <div>
      <h2 style={{margin:0}}>Vccume Control</h2>

      <div style={{display:'flex'}}>
        Vacuum Pump
        <Switch
          checked={state}
          // onChange={(_e, v) => setChecked(v)}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>

      <span>Vacuum Pressure</span>
      <Slider
        value={detectedlevel}
        // onChange={(_e, v) => {setValue1(v as number[])}}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(v) => `${v}°C`}
        style={{ width: "100%" }}
      />

      <span>Vaccum Attachment</span>
      <div style={{display:'flex'}}>
        <Button variant="contained" color="primary" href="#contained-buttons" style={{ width: "32%", marginRight: '6px', }}
          onClick={() => { setdis(true); setdis1(false); setdis2(false) }} disabled={(dis)}
        >
          Lympathic
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons" style={{ marginRight: '6px', }}
          onClick={() => { setdis2(true); setdis1(false); setdis(false) }} disabled={(dis2)}
        >
          MultiplatFor
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons"
          onClick={() => { setdis1(true); setdis(false); setdis2(false) }} disabled={(dis1)}
        >
          Perk
        </Button>
      </div>

      <span>Get Sensed Vaccume</span>
      <div style={{display:'flex'}}>
        <CircularProgressWithLabel value={setting} />
        <CircularProgressWithLabel value={progress} />
      </div>

    </div>
  )
}

export default Vacuum
