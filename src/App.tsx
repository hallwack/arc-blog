import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Home />;
    </BrowserRouter>
  );
};

export default App;
