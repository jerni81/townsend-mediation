import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function HeaderMobile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const [offset, setOffset] = useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Services", "Team", "Calender", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <Link to={`/${text}`}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  useEffect(() => {
    const bHeight = document.getElementById("button").offsetHeight;
    const hHeight = document.getElementById("Header").offsetHeight;
    let offset = bHeight - hHeight;
    setOffset(offset);
  }, []);

  return (
    <div className="Header" id="Header" style={{ top: offset }}>
      <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
        <u>
          <h2>Jack L. Townsend, Sr.</h2>
        </u>
        <h3>
          Mediation - Arbitration <br /> Consulting Services
        </h3>
      </Link>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
            id="button"
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Lato , sans-serif",
                fontWeight: "bold",
              }}
            >
              <u>Menu</u>
            </span>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default HeaderMobile;
