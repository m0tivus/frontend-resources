import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

import { Delete as DeleteIcon } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    padding: "10px",
  },
}));

export default function ModalDeleteConfirm({
  removeResource,
  r,
  enqueueSnackbar,
  setSelected,
  ...props
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.buttonComponent ? (
        React.cloneElement(props.buttonComponent, { onClick: handleOpen })
      ) : (
        <DeleteIcon fontSize="small" onClick={handleOpen} />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <p> ¿Está seguro que desea eliminar el elemento? </p>
          {console.log(
            "delete",
            removeResource,
            r,
            enqueueSnackbar,
            setSelected,
            props
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              removeResource(props, r, enqueueSnackbar, setSelected);
              handleClose();
            }}
          >
            Confirmar
          </Button>
          {"  "}
          <Button variant="contained" color="default" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Modal>
    </div>
  );
}
