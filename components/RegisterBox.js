import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";

import ProductList from "./RegisterBoxComponents/ProductList";
import ProductItem from "./RegisterBoxComponents/ProductItem";
import ProductSearchField from "./RegisterBoxComponents/ProductSearchField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginLeft: "auto"
  },
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  productItem: {
    marginTop: 112,
    marginBottom: 102,
    left: "12%",
    position: "fixed"
  },
  appBarBottom: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    Top: 40,
    left: 0,
    right: "45%",
    margin: "0 auto"
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Aether Market App
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <ProductSearchField className={classes.fabButton} />
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={6}>
          <div className={classes.productItem}>
            <ProductItem />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ProductList />
        </Grid>
      </Grid>
      <AppBar position="fixed" color="primary" className={classes.appBarBottom}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography
            style={{ marginLeft: "auto", marginRight: "auto" }}
            variant="h3"
            gutterBottom
            className={classes.text}
          >
            TOTAL: $ 24.000
          </Typography>
          <div className={classes.grow} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ padding: 9, width: 240 }}
          >
            <Typography variant="h4">PAGAR</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
