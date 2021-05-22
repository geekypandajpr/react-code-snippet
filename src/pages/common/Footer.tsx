import React from "react"
import { IMAGES_URL } from "../../constants/Images"
import { useState } from "react"
import { Button } from "@material-ui/core"
import { useStyles } from "./style"

const Footer = () => {
  const classes = useStyles()

  const imgs = [0, 1, 2, 3]
  const img1 = IMAGES_URL.POWER_ICON
  const img2 = IMAGES_URL.POWER_OFF_ICON

  const [flag, setFlag] = useState(0)

  return (
    <div className={classes.root} style={{
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      background: "black",
      overflow: 'hidden',
    }}>
      {imgs.map((img, i) => (
        <Button
          onClick={() => {
            setFlag(img);
          }}
        >
          <img alt=""
            src={i === flag ? img1 : img2}
            style={{ width: "45px" }}
          />
        </Button>
      ))}
    </div>
  )
}

export default Footer
