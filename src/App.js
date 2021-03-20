import "./App.css";
import Browser from "./components/Browser/Browser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Galery from "./components/Galery/Galery";
import BrowserInput from "./components/BrowserInput/BrowserInput";

function App() {
  return (
    <>
      <BrowserRouter>
        <BrowserInput />
        <Switch>
          <Route exact path="/" component={Browser}></Route>
          <Route exact path="/galery/:searchTag" component={Galery}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
