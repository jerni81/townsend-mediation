import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HeaderDesk() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} className="Header">
      <Link to="/" style={{ color: "#FFF" }} onClick={handleChange}>
        <u>
          <h1>Jack L. Townsend, Sr.</h1>
        </u>
        <span>Mediation - Arbitration - Consulting Services</span>
      </Link>
      <AppBar position="sticky" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab
            label="Services"
            {...a11yProps(0)}
            to="/Services"
            component={Link}
            style={{ color: "#FFF" }}
          />

          <Tab
            label="Our Team"
            {...a11yProps(1)}
            to="/Team"
            component={Link}
            style={{ color: "#FFF" }}
          />

          <Tab
            label="Calender"
            {...a11yProps(2)}
            to="/Calender"
            component={Link}
            style={{ color: "#FFF" }}
          />

          <Tab
            label="Contact"
            {...a11yProps(3)}
            to="/Contact"
            component={Link}
            style={{ color: "#FFF" }}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
