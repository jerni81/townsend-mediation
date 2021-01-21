import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HeaderMobile from "./components/header/HeaderMobile";
import HeaderDesk from "./components/header/HeaderDesk";
import Footer from "./components/Footer";
import Home from "./components/main/Home";
import Services from "./components/main/Services";
import Team from "./components/main/Team";
import Calendar from "./components/main/Calendar";
import Contact from "./components/main/Contact";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width: 771px)");

  const [hHeight, setHHeight] = useState();

  useEffect(() => {
    const bHeight = document.getElementById("test");
    // const hHeight = document.getElementById("Header").offsetHeight;
    // let offset = bHeight - hHeight;
    // setOffset(offset);
  }, []);

  return (
    <div className="App">
      {matches ? (
        <HeaderDesk setHHeight={setHHeight} />
      ) : (
        <HeaderMobile setHHeight={setHHeight} />
      )}
      <Switch>
        <Route
          path="/Services"
          render={(props) => <Services {...props} hHeight={hHeight} />}
        />

        <Route
          path="/Team"
          render={(props) => <Team {...props} hHeight={hHeight} />}
        />

        <Route
          path="/Calendar"
          render={(props) => <Calendar {...props} hHeight={hHeight} />}
        />

        <Route
          path="/Contact"
          render={(props) => <Contact {...props} hHeight={hHeight} />}
        />

        <Route
          path="/"
          render={(props) => <Home {...props} hHeight={hHeight} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
