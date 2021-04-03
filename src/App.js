import "./App.css";
import Browser from "./components/Browser/Browser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Galery from "./components/Galery/Galery";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={Browser}></Route>
          <Route exact path="/galery/:searchTag" component={Galery}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
