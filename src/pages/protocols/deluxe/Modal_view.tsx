import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { IMAGES_URL } from "../../../constants/Images";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

const Modal_view = (props: any) => {
  const [open, setOpen] = useState(props.value);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      // onClose={handleClose}
      style={{
        width: "90%",
        height: "90%",
        margin: "0px 100px 0px 100px",
      }}
    >
      <Grid container direction="row">
        <Grid>
          <IconButton onClick={handleClose} style={{ background: "red" }}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <img alt=""
          src={IMAGES_URL.MODAL_IMAGE}
          style={{ width: "90%", height: "50%", margin: "10px auto" }}
        />
      </Grid>
    </Modal>
  );
};

export default Modal_view;
