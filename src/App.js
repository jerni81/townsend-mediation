import "./App.css";
import { Switch, Route } from "react-router-dom";
import HeaderMobile from "./components/header/HeaderMobile";
import HeaderDesk from "./components/header/HeaderDesk";
import Footer from "./components/Footer";
import Home from "./components/main/Home";
import Services from "./components/main/Services";
import Team from "./components/main/Team";
import Calender from "./components/main/Calender";
import Contact from "./components/main/Contact";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width: 771px)");
  return (
    <div className="App">
      {matches ? <HeaderDesk /> : <HeaderMobile />}
      <Switch>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/Team">
          <Team />
        </Route>
        <Route path="/Calender">
          <Calender />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
