import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HeaderMobile from "./components/header/HeaderMobile";
import HeaderDesk from "./components/header/HeaderDesk";
import Footer from "./components/Footer";
import Home from "./components/main/Home";
import Services from "./components/main/Services";
import Team from "./components/main/Team";
import Calendar from "./components/main/Calendar";
import Contact from "./components/main/Contact";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const matches = useMediaQuery("(min-width: 771px)");

  const [hHeight, setHHeight] = useState();
  const [fHeight, setFHeight] = useState();

  const combinedHeight = hHeight + fHeight;

  return (
    <div className="App">
      {matches ? <HeaderDesk setHHeight={setHHeight} /> : <HeaderMobile />}
      <Switch>
        <Route
          path="/Services"
          render={(props) => (
            <Services
              {...props}
              hHeight={hHeight}
              combinedHeight={combinedHeight}
            />
          )}
        />

        <Route
          path="/Team"
          render={(props) => (
            <Team
              {...props}
              hHeight={hHeight}
              combinedHeight={combinedHeight}
            />
          )}
        />

        <Route
          path="/Calendar"
          render={(props) => (
            <Calendar
              {...props}
              hHeight={hHeight}
              combinedHeight={combinedHeight}
            />
          )}
        />

        <Route
          path="/Contact"
          render={(props) => (
            <Contact
              {...props}
              hHeight={hHeight}
              combinedHeight={combinedHeight}
            />
          )}
        />

        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              hHeight={hHeight}
              combinedHeight={combinedHeight}
            />
          )}
        />
      </Switch>
      <Footer setFHeight={setFHeight} />
    </div>
  );
}

export default App;
