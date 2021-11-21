import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Pagina02 from "../pages/Pagina02";
import Pagina03 from "../pages/Pagina03";

class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/Pagina02" component={ Pagina02 } />
        <Route exactpath="/Pagina03" component={ Pagina03 } />
      </Routes>
    );
  }
}

export default Content;
