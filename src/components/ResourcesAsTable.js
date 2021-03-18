import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";

import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons/";

import PropTypes from "prop-types";
import _ from "lodash";
import clsx from "clsx";

import ResourcesModalForm from "./ResourcesModalForm";
import { format } from "date-fns";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  table: {},
  container: {
    padding: theme.spacing(1),
  },
  selectedRow: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  tableContainer: {
    position: "relative",
    height: "calc(100% - 8px)",
    width: "100%",
    margin: "4px",
    top: 0,
    left: 0,
  },
}));

async function removeResource(props, resource, enqueueSnackbar, setSelected) {
  if (setSelected && props.parentSelections) {
    await props.model.remove(...props.parentSelections, resource.id);
    setSelected(undefined);
  } else {
    await props.model.remove(resource.id);
  }

  await props.refreshData();
  enqueueSnackbar("Se eliminó con éxito", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  });
}

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

function renderField(row, field) {
  const value = field.value ? field.value(row) : _(row).get(field.field);

  switch (field.type) {
    case "currency":
      return formatter.format(value);
    case "date":
      return format(new Date(value), "dd/MM/yyyy");
    case "boolean":
      return value ? "Si" : "No";
    default:
      return value;
  }
}

function ResourcesAsTable({
  enoughSelections = true,
  resources,
  selected,
  setSelected,
  allowCreation = true,
  ...props
}) {
  const { fields } = props.model;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    enoughSelections && (
      <Grid item xs={12}>
        <TableContainer
          /* component={Paper} */
          className={clsx(
            allowCreation && !props.hideAddButton && classes.tableContainer
          )}
          style={{ backgroundColor: "#e8e8e8" }}
        >
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
            style={{ backgroundColor: "white" }}
          >
            <TableHead>
              <TableRow>
                {props.checkbox && <TableCell></TableCell>}
                {_(fields)
                  .filter((f) => f.only === "list" || !f.only)
                  .map((f) => (
                    <TableCell key={`header-${f.name}`}>{f.name}</TableCell>
                  ))
                  .value()}

                {allowCreation && <TableCell> Acciones </TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {resources.length ? (
                resources.map((r) => (
                  <React.Fragment key={`row-${r.id}`}>
                    <TableRow
                      hover
                      selected={selected === r.id}
                      onClick={() => (setSelected ? setSelected(r.id) : null)}
                    >
                      {props.checkbox && (
                        <TableCell component="th" scope="row">
                          <Checkbox
                            defaultChecked
                            color="primary"
                            inputProps={{ "aria-label": "secondary checkbox" }}
                          />
                        </TableCell>
                      )}
                      {_(fields)
                        .filter((f) => f.only === "list" || !f.only)
                        .map((f) => (
                          <TableCell
                            key={`row-${r.id}-${f.name}`}
                            component="th"
                            scope="row"
                            className={
                              selected === r.id
                                ? classes.selectedRow
                                : classes.notSelectedRow
                            }
                          >
                            {renderField(r, f)}
                          </TableCell>
                        ))
                        .value()}{" "}
                      {allowCreation && (
                        <TableCell
                          component="th"
                          scope="row"
                          className={
                            selected === r.id
                              ? classes.selectedRow
                              : classes.notSelectedRow
                          }
                        >
                          <ButtonGroup variant="contained" color="primary">
                            <ResourcesModalForm
                              mode="edit"
                              resource={r}
                              resources={resources}
                              buttonComponent={
                                <IconButton color="inherit" variant="contained">
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              }
                              {...props}
                            />

                            <IconButton
                              color="inherit"
                              variant="contained"
                              onClick={() =>
                                removeResource(
                                  props,
                                  r,
                                  enqueueSnackbar,
                                  setSelected
                                )
                              }
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </ButtonGroup>
                        </TableCell>
                      )}
                    </TableRow>
                    {props.afterRow && (
                      <TableRow>
                        <TableCell colSpan={fields.length + 1}>
                          {props.afterRow(r)}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <TableRow>
                  <TableCell>
                    <Typography variant="caption"> No hay datos</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {allowCreation && !props.hideAddButton && (
            <ResourcesModalForm
              resources={resources}
              setSelected={setSelected}
              {...props}
            />
          )}
        </TableContainer>
      </Grid>
    )
  );
}

ResourcesAsTable.propTypes = {
  model: PropTypes.shape({
    fields: PropTypes.array.isRequired,
  }),
};

export default ResourcesAsTable;
