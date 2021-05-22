import React, { useEffect, useState } from "react"
import {
  Button,
  Slider,
  Switch,
} from "@material-ui/core"
import CircularProgressWithLabel from "../common/CircularProgressWithLabel"

function valuetext(value: number) {
  return `${value}°C`;
}

const SerumSelection = () => {

  const [slider1, setSlider1] = useState([20, 37]);
  const [slider2, setSlider2] = useState([0, 49]);
  const [slider3, setSlider3] = useState([50, 88]);
  const [slider4, setSlider4] = useState([20, 37]);

  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(true)

  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800)
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <h2 style={{margin:0}}>Serum Selection</h2>

      <Button variant="contained" color="secondary" style={{ backgroundColor: "red", borderRadius: "20px" }}>
        Serum1
      </Button>
      <Switch
        checked={checked1}
        onChange={(_e, v) => setChecked1(v)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Slider
        value={slider1}
        onChange={(_e, v) => setSlider1(v as number[])}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ width: "100%", marginTop: '5px', }}
      />

      <Button variant="contained" color="secondary" style={{ backgroundColor: "green", borderRadius: "20px" }}>
        Serum2
      </Button>
      <Switch
        checked={checked2}
        onChange={(_e, v) => setChecked2(v)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Slider
        value={slider2}
        onChange={(_e, v) => setSlider2(v as number[])}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ width: "100%", marginTop: '5px', }}
      />

      <Button variant="contained" color="secondary" style={{ backgroundColor: "red", borderRadius: "20px" }}>
        Serum3
      </Button>
      <Switch
        checked={checked3}
        onChange={(_e, v) => setChecked3(v)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Slider
        value={slider3}
        onChange={(_e, v) => setSlider3(v as number[])}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ width: "100%", marginTop: '5px', }}
      />

      <Button variant="contained" color="secondary" style={{ backgroundColor: "green", borderRadius: "20px" }}>
        Serum4
      </Button>
      <Switch
        checked={checked4}
        onChange={(_e, v) => setChecked4(v)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Slider
        value={slider4}
        onChange={(_e, v) => setSlider4(v as number[])}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ width: "100%", marginTop: '5px', }}
      />

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', marginTop:20}}>
        <CircularProgressWithLabel value={progress} />
        <CircularProgressWithLabel value={progress} />
        <CircularProgressWithLabel value={progress} />
        <CircularProgressWithLabel value={progress} />
      </div>
    </div>
  )
}

export default SerumSelection
