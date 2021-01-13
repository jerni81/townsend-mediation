import "./App.css";
import HeaderMobile from "./components/header/HeaderMobile";
import HeaderDesk from "./components/header/HeaderDesk";

import Footer from "./components/Footer";
import Main from "./components/Main";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="App">
      {matches ? <HeaderDesk /> : <HeaderMobile />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
