import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const productsData = [
  {
    id: 1,
    primary: "Bebida Light 44",
    secondary: "sku 453454545345345445",
    img: "/static/images/products/bebida.webp",
    price: 990
  },
  {
    id: 2,
    primary: "Yogu ArtghJ",
    secondary: `sku 2342343242343242434`,
    img: "/static/images/products/yogurt.webp",
    price: 200
  },
  {
    id: 3,
    primary: "Harina 1122",
    secondary: "sku 2343243423423423",
    img: "/static/images/products/harina.webp",
    price: 1200
  }
];

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  listItemSecondaryAction: {
    paddingTop: 9
  },
  paper: {
    marginTop: 93,
    marginBottom: 93
  },
  list: {},
  subheader: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Lista de productos
        </Typography>
        <List className={classes.list}>
          {productsData.map(({ id, primary, secondary, img, price }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Product Picture" src={img} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <ListItemSecondaryAction style={{ display: "flex" }}>
                  <Typography
                    className={classes.listItemSecondaryAction}
                    variant="h5"
                    gutterBottom
                  >
                    {price} x 1
                  </Typography>
                  <IconButton edge="end" aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
