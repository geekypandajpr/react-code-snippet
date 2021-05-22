import React from 'react'
import Thermometer from 'react-thermometer-component'


const Temperature = () => {

  return (
    <div>
      <h2 style={{margin: 0}}>Temprature</h2>

      <div style={{display:'flex'}}>
        <div style={{fontSize:60}}>
          25 <span style={{ verticalAlign: 'super', fontSize: '15px', }}>℃</span>
        </div>

        <Thermometer
          value='25'
          steps={5}
        />
      </div>
    </div>
  )
}

export default Temperature
