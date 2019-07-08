import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 420,
    position: "absolute",
    zIndex: 1,
    Top: 50,
    left: "11%",
    margin: "36px auto"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Agregar producto"
        inputProps={{ "aria-label": "Agregar producto" }}
      />
      <IconButton className={classes.iconButton} aria-label="Buscar">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
