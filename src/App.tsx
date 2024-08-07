// import "./App.css";
// import Browser from "./components/Browser/Browser";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Galery from "./components/Galery/Galery";
// import React from 'react'

// function App() {

//   return (
//       <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <Switch>
//           <Route exact path="/" component={Browser}/>
//           <Route exact path="/galery/:searchTag" component={Galery}/>
//         </Switch>
//       </BrowserRouter>
//   );
// }

// export default App;


import "./App.css";
import Browser from "./components/Browser/Browser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galery from "./components/Galery/Galery";
import React from 'react';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Browser />} />
        <Route path="/galery/:searchTag" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;