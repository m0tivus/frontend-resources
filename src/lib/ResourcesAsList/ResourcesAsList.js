import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  makeStyles,
  IconButton,
  Grid,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import ResourcesModalForm from "../ResourcesModalForm/ResourcesModalForm";
import ModalDeleteConfirm from "../ModalDeleteConfirm/ModalDeleteConfirm";

import { useSnackbar } from "notistack";
import clsx from "clsx";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  dropdownButton: {
    width: 5,
  },
  resourceName: {
    textTransform: "none",
  },
  container: {
    padding: theme.spacing(1),
  },
  containerList: {
    width: "100%",
    height: "100%",
  },
  fixedHeight: {
    position: "absolute",
    height: "100%",
    overflowX: "hidden",
    overlflowY: "scroll",
  },
}));

async function removeResource(props, resource, enqueueSnackbar, setSelected) {
  await props.model.remove(...(props.parentSelections || []), resource.id); //añadir error
  setSelected(undefined);
  await props.refreshData();

  enqueueSnackbar("Se eliminó con éxito", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  });
}

const ResourceListItem = ({
  setSelected,
  resource,
  isSelected,
  modalMode,
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClick = () => {
    setSelected(resource.id);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Grid item xs={11}>
      <ButtonGroup
        variant="contained"
        color={isSelected ? "primary" : "secondary"}
        ref={anchorRef}
        aria-label="split button"
        size="small"
        fullWidth
      >
        <Button onClick={handleClick} className={classes.resourceName}>
          {props.model.customName
            ? props.model.customName(resource)
            : resource.name}
        </Button>
        {!props.listOnly && (
          <Button
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            className={classes.dropdownButton}
          >
            <ArrowDropDownIcon />
          </Button>
        )}
      </ButtonGroup>
      {!props.listOnly && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: 10 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    <ResourcesModalForm
                      mode="edit"
                      resource={resource}
                      buttonComponent={<MenuItem>Editar</MenuItem>}
                      resources={props.resources}
                      {...props}
                    />

                    <ModalDeleteConfirm
                      removeResource={removeResource}
                      r={resource}
                      enqueueSnackbar={enqueueSnackbar}
                      setSelected={setSelected}
                      buttonComponent={<MenuItem>Eliminar</MenuItem>}
                      {...props}
                    />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </Grid>
  );
};

function ResourcesAsList({ resources = [], ...props }) {
  const classes = useStyles();
  if (!props.enoughSelections) {
    return null;
  }

  return (
    <React.Fragment>
      <div
        className={clsx(
          props.allowCreation && classes.fixedHeight,
          classes.containerList
        )}
      >
        <Grid
          container
          spacing={1}
          justify="center"
          className={classes.container}
        >
          {resources.map((r) => (
            <ResourceListItem
              key={r.id}
              resource={r}
              isSelected={
                _(props.selected).isArray()
                  ? _(props.selected).indexOf(r.id) > -1
                  : props.selected === r.id
              }
              {...props}
            />
          ))}
          {!props.listOnly && (
            <Grid item xs={11}>
              {props.enoughSelections ? (
                <ResourcesModalForm
                  mode="create"
                  {...props}
                  resources={resources}
                />
              ) : (
                <></>
              )}
            </Grid>
          )}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default ResourcesAsList;
